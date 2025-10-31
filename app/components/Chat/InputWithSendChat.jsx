import { Send } from "lucide-react";
import React, { useState } from "react";

function InputWithSendChat({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
      <input
        type="text"
        placeholder="Type a message"
        className="border rounded-md flex-1 px-3 py-3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 flex gap-2 items-center"
      >
        <span className="hidden sm:block">Send</span>
        <Send size={16} />
      </button>
    </form>
  );
}

export default InputWithSendChat;
