// app/chat/[email]/page.js
"use client";

import HeaderChat from "@/app/components/Chat/HeaderChat";
import useFetchPost from "@/app/hooks/useFetchPost";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatArea from "@/app/components/Chat/ChatArea";

import useChatSocket from "@/app/hooks/useChatSocket";
import InputWithSendChat from "@/app/components/Chat/InputWithSendChat";
import { chatingWithStore } from "@/app/redux/slices/dataSlice";

export default function ChatPage() {
  const [recieverData, setRecieverData] = useState();
  const {
    postFetchCall,
    error: recieverDataError,
    loading: recieverDataLoading,
  } = useFetchPost();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth?.user);
  const { id: receiverId } = useParams();
  const { messages, sendMessage, seenMessage, chatLoading, onlineUsers } =
    useChatSocket(loggedInUser?.id, Number(receiverId));

  useEffect(() => {
    if (!receiverId || !loggedInUser?.id) return;
    console.log("Chat opened for:id ", receiverId);
    const callFetch = async () => {
      const details = await postFetchCall("/users/get-user-profile", {
        id: receiverId,
      });
      dispatch(chatingWithStore(details?.data));
      setRecieverData(details?.data);
    };
    callFetch();
  }, [receiverId, loggedInUser]);

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="">
        <HeaderChat
          recieverData={recieverData}
          loading={recieverDataLoading}
          onlineUsers={onlineUsers}
        />

        <ChatArea
          messages={messages}
          loggedInUser={loggedInUser}
          receiverId={receiverId}
          seenMessage={seenMessage}
          loading={chatLoading}
        />
        <InputWithSendChat onSend={sendMessage} />
      </div>
    </div>
  );
}
