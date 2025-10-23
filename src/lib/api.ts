const API_BASE_URL = import.meta.env.VITE_API_URL ?? "https://agent.paulgarghe.com";

export interface AskRequest {
  question: string;
}

export interface AskResponse {
  answer: string;
}

export const askQuestion = async (question: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: AskResponse = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};
