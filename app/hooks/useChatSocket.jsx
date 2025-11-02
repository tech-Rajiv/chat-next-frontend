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
      console.log("message recieved", data);
      setMessages((prev) => [...prev, data]);
    });
    return () => {
      socket.disconnect();
    };
  }, [loggedInUserId, receiverId]);

  const sendMessage = async (content) => {
    if (!content.trim()) return;
    const roomId = [loggedInUserId, receiverId].sort().join("_");
    const messageData = {
      roomId,
      senderId: loggedInUserId,
      receiverId,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, messageData]);
    console.log("message sent", messageData);
    const msgSent = await fetchSendMessage(messageData);
    // socketRef.current?.emit("send_message", messageData);
  };

  const fetchSendMessage = async (messageData) => {
    console.log("sending text", messageData);
    const data = await postFetchCall("/chats/send", { ...messageData });
    console.log("recived data text res", data);
  };
  return { messages, sendMessage };
}
