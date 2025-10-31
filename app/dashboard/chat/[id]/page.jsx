// app/chat/[email]/page.js
"use client";

import BackButton from "@/app/components/BackButton";
import HeaderChat from "@/app/components/Chat/HeaderChat";
import { io } from "socket.io-client";
import useFetchPost from "@/app/hooks/useFetchPost";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";

export default function ChatPage() {
  const { id: receiverId } = useParams(); // 👈 /chat/[id]
  const [receiver, setReceiver] = useState(null);
  const { postFetchCall, error, loading } = useFetchPost();

  const loggedInUser = { id: 1, name: "rajiv" };

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const socketRef = useRef(null);

  const [data, setData] = useState();

  //to get infos
  useEffect(() => {
    console.log("Chat opened for:id ", receiverId);
    const callFetch = async () => {
      const details = await postFetchCall("users/get-user-profile", {
        id: receiverId,
      });
      setData(details?.data);
    };
    callFetch();
  }, [receiverId]);

  // Setup socket
  useEffect(() => {
    if (!receiverId) return;
    console.log("socket ran");
    const socket = io("http://localhost:4000", { withCredentials: true });
    socketRef.current = socket;

    const roomId = [loggedInUser.id, receiverId].sort().join("_");
    socket.emit("join_room", roomId);

    console.log(`✅ Joined room: ${roomId}`);

    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [receiverId]);

  const handleSend = (e) => {
    e.preventDefault();
    console.log("handlesend ran");
    const roomId = [loggedInUser.id, receiverId].sort().join("_");

    const messageData = {
      roomId,
      senderId: loggedInUser.id,
      receiverId,
      text: messageInput,
      timestamp: new Date(),
    };

    socketRef.current.emit("send_message", messageData);
    setMessageInput("");
  };

  console.log(messages, "messages");
  if (loading) {
    return "loading...";
  }
  if (error) {
    return "something went wrong...";
  }
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="p-3">
        <HeaderChat details={data} />
        <div className="border flex flex-col mt-5 rounded-lg p-3 min-h-[70vh] overflow-y-auto bg-gray-50">
          {messages.length ? (
            messages.map((msg, i) => (
              <span
                key={i}
                className={`p-2 w-content rounded-md mb-2 ${
                  msg.senderId === loggedInUser.id
                    ? "border border-green-400 text-right"
                    : "border border-blue-400 text-left"
                }`}
              >
                {msg.text}
              </span>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No messages yet.</p>
          )}
        </div>

        <form onSubmit={handleSend} className="mt-3 flex gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="border rounded-md flex-1 px-3 py-2"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 flex gap-2 items-center"
          >
            <span className="hidden sm:block">Send</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
