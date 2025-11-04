import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import useFetchPost from "./useFetchPost";

export default function useChatSocket(loggedInUserId, receiverId) {
  const [messages, setMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);
  const socketRef = useRef(null);
  const { postFetchCall } = useFetchPost();

  // 🔹 Load old messages
  const fetchOldMessages = async (roomKey) => {
    try {
      setChatLoading(true);
      const data = await postFetchCall("/chats/messages", { roomKey });
      if (data?.messages) setMessages(data.messages);
    } catch (err) {
      console.error("Failed to fetch old messages", err);
    } finally {
      setChatLoading(false);
    }
  };

  // 🔹 Initialize socket when both IDs are available
  useEffect(() => {
    if (!loggedInUserId || !receiverId) return;

    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
      withCredentials: true,
    });

    socketRef.current = socket;

    const roomKey = [loggedInUserId, receiverId].sort().join("_");
    socket.emit("join_room", roomKey);
    console.log(`Joined room: ${roomKey}`);

    fetchOldMessages(roomKey);

    // 🔹 Handle incoming messages
    socket.on("receive_message", (data) => {
      console.log("📩 New message received from socket:", data);

      setMessages((prev) => {
        const exists = prev.some(
          (msg) => msg.id === data.id || msg.tempId === data.tempId
        );
        if (exists) {
          return prev.map((msg) =>
            msg.tempId === data.tempId ? { ...msg, ...data } : msg
          );
        }
        const updated = [...prev, data];
        return updated.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      });
    });

    // 🔹 Handle seen updates separately
    socket.on("message_seen_update", (updatedMessage) => {
      console.log("👀 Message seen update:", updatedMessage);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === updatedMessage.id ? { ...msg, status: "READ" } : msg
        )
      );
    });

    socket.on("disconnect", () =>
      console.log("Socket disconnected:", socket.id)
    );

    return () => {
      socket.disconnect();
      console.log("🧹 Socket cleanup complete");
    };
  }, [loggedInUserId, receiverId]);

  // 🔹 Send message
  const sendMessage = (text) => {
    if (!text.trim() || !loggedInUserId || !receiverId || !socketRef.current)
      return;

    const tempId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    const newMessage = {
      tempId,
      senderId: loggedInUserId,
      receiverId,
      text,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    // Update locally first
    setMessages((prev) =>
      [...prev, newMessage].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    );

    // Send via socket
    socketRef.current.emit("send_message", newMessage);
  };

  // 🔹 Mark message as seen
  const seenMessage = async (lastMessage, retryCount = 0) => {
    if (!lastMessage) return;

    const roomKey = [lastMessage.senderId, lastMessage.receiverId]
      .sort()
      .join("_");
    const messageId = lastMessage?.id;
    const status = lastMessage?.status;
    // If socket not ready, retry
    if (!socketRef.current) {
      if (retryCount < 5) {
        console.log(
          `⏳ Retrying seenMessage in 500ms... (attempt ${retryCount + 1})`
        );
        setTimeout(() => seenMessage(lastMessage, retryCount + 1), 400);
      } else {
        console.warn("⚠️ Failed to emit seen_message after multiple retries.");
      }
      return;
    }

    // ✅ Socket ready → emit seen_message
    console.log("✅ Emitting seen_message", { roomKey, messageId });
    socketRef.current.emit("seen_message", { roomKey, messageId, status });
  };

  return { messages, sendMessage, seenMessage, chatLoading };
}
