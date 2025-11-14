const API_BASE_URL = import.meta.env.VITE_API_URL ?? "https://agent.paulgarghe.com";

export interface HumanMessage {
  type: "human";
  content: string;
}

export interface AIMessage {
  type: "ai";
  content: string;
}

export interface Request {
  input: {
    messages: (HumanMessage | AIMessage)[];
  };
  config?: {
    run_id?: string;
    tags?: string[];
  };
}

export interface AIMessageChunk {
  type: "AIMessageChunk";
  content: string | string[];
  [key: string]: any; // Para otros campos que pueda tener
}

/**
 * Stream messages from the API using SSE
 * @param messages Array of messages in the conversation history
 * @param onChunk Callback function called for each chunk of content received
 * @param runId Optional run ID for tracking the conversation
 * @returns Promise that resolves with the full accumulated content
 */
export const streamMessages = async (
  messages: (HumanMessage | AIMessage)[], 
  onChunk: (content: string) => void,
  runId?: string
): Promise<string> => {
  try {
    const requestBody: Request = {
      input: { messages },
      ...(runId && { config: { run_id: runId } }),
    };

    const response = await fetch(`${API_BASE_URL}/stream_messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let fullContent = "";
    let buffer = "";

    if (!reader) {
      throw new Error("No reader available");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Decodificar el chunk y agregarlo al buffer
      buffer += decoder.decode(value, { stream: true });
      
      // Procesar líneas completas (separadas por \n)
      const lines = buffer.split('\n');
      // Guardar la última línea incompleta en el buffer
      buffer = lines.pop() || "";

      // Procesar cada línea completa
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;

        try {
          // Cada línea es un JSON completo
          const data: AIMessageChunk = JSON.parse(trimmedLine);
          
          // Extraer el contenido del chunk
          if (data.type === "AIMessageChunk" && data.content) {
            let chunkContent = '';
            if (typeof data.content === 'string') {
              chunkContent = data.content;
            } else if (Array.isArray(data.content)) {
              chunkContent = data.content.join('');
            }
            
            if (chunkContent) {
              fullContent += chunkContent;
              onChunk(chunkContent);
            }
          }
        } catch (e) {
          // Si no es JSON válido, ignorar la línea
          console.warn('Failed to parse SSE line:', trimmedLine, e);
        }
      }
    }

    // Procesar cualquier línea restante en el buffer
    if (buffer.trim()) {
      try {
        const data: AIMessageChunk = JSON.parse(buffer.trim());
        if (data.type === "AIMessageChunk" && data.content) {
          let chunkContent = '';
          if (typeof data.content === 'string') {
            chunkContent = data.content;
          } else if (Array.isArray(data.content)) {
            chunkContent = data.content.join('');
          }
          
          if (chunkContent) {
            fullContent += chunkContent;
            onChunk(chunkContent);
          }
        }
      } catch (e) {
        console.warn('Failed to parse final buffer:', buffer, e);
      }
    }

    return fullContent;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};
