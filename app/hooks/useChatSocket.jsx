import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import useFetchPost from "./useFetchPost";

export default function useChatSocket(loggedInUserId, receiverId) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const { loading, error, setError, postFetchCall } = useFetchPost();
  useEffect(() => {
    if (!loggedInUserId || !receiverId) return;

    const socket = io("http://localhost:4000", { withCredentials: true });
    socketRef.current = socket;

    const roomId = [loggedInUserId, receiverId].sort().join("_");
    socket.emit("join_room", roomId);
    console.log(` Joined room: ${roomId}`);

    socket.on("receive_message", (data) => {
      console.log("some message recieved", data);
      setMessages((prev) => {
        const iSentMsg = prev.some((msg) => msg.tempId === data.tempId);
        if (iSentMsg) {
          return prev.map((msg) =>
            msg.tempId === data.tempId
              ? { ...msg, status: data.status, createdAt: data?.createdAt }
              : msg
          );
        }
        return [...prev, data];
      });
    });
    return () => {
      socket.disconnect();
    };
  }, [loggedInUserId, receiverId]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const roomId = [loggedInUserId, receiverId].sort().join("_");
    const tempId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    const messageData = {
      roomId,
      tempId,
      senderId: loggedInUserId,
      receiverId,
      text,
      status: "PENDING",
    };
    setMessages((prev) => [...prev, messageData]);
    socketRef.current?.emit("send_message", messageData);
    // const msgSent = await fetchSendMessage(messageData);
  };

  const fetchSendMessage = async (messageData) => {
    console.log("sending text", messageData);
    const data = await postFetchCall("/chats/send", { ...messageData });
    console.log("recived response of send mesage call", data);
  };
  return { messages, sendMessage };
}
