import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import useFetchPost from "./useFetchPost";

export default function useChatSocket(loggedInUserId, receiverId) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const { loading, error, setError, postFetchCall } = useFetchPost();

  //db request will retrive messages
  const makeDBfetchOldMessages = async (roomKey) => {
    const data = await postFetchCall("/chats/messages", { roomKey });
    console.log("data of old messages", data);
    if (data) {
      console.log("seeted messagess");
      setMessages(data?.messages);
    }
  };

  useEffect(() => {
    if (!loggedInUserId || !receiverId) return;

    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
      withCredentials: true,
    });
    socketRef.current = socket;

    const roomId = [loggedInUserId, receiverId].sort().join("_");
    socket.emit("join_room", roomId);
    console.log(` Joined room: ${roomId}`);

    // db request to get old chats if exists and setMessages
    makeDBfetchOldMessages(roomId);

    socket.on("receive_message", (data) => {
      console.log("🟢 Received via socket:", data);

      setMessages((prev) => {
        // Always create a shallow copy
        const updated = [...prev];

        // Check if the message already exists (by id or tempId)
        const exists = updated.some(
          (msg) => msg.id === data.id || msg.tempId === data.tempId
        );

        if (!exists) {
          updated.push(data);
        } else {
          // If same tempId found, update it
          return updated.map((msg) =>
            msg.tempId === data.tempId ? { ...msg, ...data } : msg
          );
        }

        // Optional: maintain correct order (oldest → newest)
        return updated.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [loggedInUserId, receiverId]);

  const sendMessage = async (text) => {
    console.log("clicked");
    if (!text.trim()) return;
    if (!loggedInUserId || !receiverId) return;
    const tempId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    const messageData = {
      tempId,
      senderId: loggedInUserId,
      receiverId,
      text,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => {
      const updated = [...prev, messageData];
      return updated.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    });
    socketRef.current?.emit("send_message", messageData);
  };

  return { messages, sendMessage };
}
