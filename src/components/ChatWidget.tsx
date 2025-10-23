import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { askQuestion } from "@/lib/api";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Mensaje inicial al abrir por primera vez
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Hello! I am Paul's AI agent, you can talk to me if you have a question about Paul's profile and I will answer if I can.\n\nSome examples of questions I can answer:\n• What is Paul doing right now?\n• Tell me about Paul's CV\n• Tell me about Paul's interests\n\nPlease note I am a beta version and don't have all context yet. Please note the first message will take a few seconds to answer, servers loading!",
        },
      ]);
    }
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setLoading(true);
    try {
      const answer = await askQuestion(text);
      const botMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: answer };
      setMessages((m) => [...m, botMsg]);
    } catch (e) {
      const errMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: "Error conectando con el agente." };
      setMessages((m) => [...m, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 transition flex items-center gap-2 pl-2 pr-3"
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <span className="flex items-center gap-2">
            <img
              src="/linkedIn-photo-4.png"
              alt="AI Agent"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm font-medium">AI Agent</span>
          </span>
        )}
      </button>

      {open && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] flex flex-col shadow-2xl border-border">
          <div className="p-3 border-b text-sm font-semibold">Paul's AI Agent</div>

          <div className="p-3 space-y-2 overflow-y-auto" style={{ maxHeight: "50vh" }}>
            {messages.length === 0 && (
              <div className="text-xs text-muted-foreground">Empieza la conversación...</div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-lg px-3 py-2 text-xs ml-8"
                    : "bg-muted rounded-lg px-3 py-2 text-xs mr-8"
                }
              >
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Escribe un mensaje..."
            />
            <Button onClick={send} disabled={loading || !input.trim()}>
              {loading ? "..." : "Enviar"}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;


