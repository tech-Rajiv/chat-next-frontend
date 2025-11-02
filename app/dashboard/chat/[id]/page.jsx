// app/chat/[email]/page.js
"use client";

import HeaderChat from "@/app/components/Chat/HeaderChat";
import useFetchPost from "@/app/hooks/useFetchPost";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatArea from "@/app/components/Chat/ChatArea";

import useChatSocket from "@/app/hooks/useChatSocket";
import InputWithSendChat from "@/app/components/Chat/InputWithSendChat";

export default function ChatPage() {
  const [recieverData, setRecieverData] = useState();
  const {
    postFetchCall,
    error: recieverDataError,
    loading: recieverDataLoading,
  } = useFetchPost();

  const loggedInUser = useSelector((state) => state.auth?.user);
  const { id: receiverId } = useParams();
  const { messages, sendMessage } = useChatSocket(loggedInUser?.id, Number(receiverId));

  console.log("my Id: ", loggedInUser?.id);

  useEffect(() => {
    if (!receiverId || !loggedInUser?.id) return;
    console.log("Chat opened for:id ", receiverId);
    const callFetch = async () => {
      const details = await postFetchCall("/users/get-user-profile", {
        id: receiverId,
      });
      setRecieverData(details?.data);
    };
    callFetch();
  }, [receiverId, loggedInUser]);

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="p-3">
        <HeaderChat recieverData={recieverData} loading={recieverDataLoading} />
        <ChatArea messages={messages} loggedInUser={loggedInUser} />
        <InputWithSendChat onSend={sendMessage} />
      </div>
    </div>
  );
}
