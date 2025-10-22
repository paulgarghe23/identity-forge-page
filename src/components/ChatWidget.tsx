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
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 transition"
      >
        {open ? "×" : "IA"}
      </button>

      {open && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] flex flex-col shadow-2xl border-border">
          <div className="p-3 border-b text-sm font-semibold">Agente IA</div>

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
                {m.content}
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


