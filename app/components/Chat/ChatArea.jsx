import { chatThemeUrlStore } from "@/app/redux/slices/dataSlice";
import { Check, CheckCheck, EllipsisVertical, Eye, Info } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageInfo from "./MessageInfo";

function ChatArea({ messages, loggedInUser, seenMessage, loading }) {
  const chatContainerRef = useRef();
  const chatWallpaperUrl = useSelector(
    (state) => state.data.chatStyles?.themeUrl
  );
  const [selectedMessageIdForInfo, setSelectedMessageIdForInfo] = useState();
  const dispatch = useDispatch();

  const handleMessageSelectedForInfo = (msgId) => {
    console.log(msgId);
    setSelectedMessageIdForInfo(msgId);
  };

  useEffect(() => {
    console.log("selected walpaper so ");
    const url = localStorage.getItem("wallpaper-url");
    if (url) {
      dispatch(chatThemeUrlStore(url));
    }
  }, []);

  useEffect(() => {
    const newestMessage = messages[0];
    if (
      newestMessage &&
      newestMessage.senderId !== loggedInUser?.id &&
      newestMessage.status !== "READ"
    ) {
      seenMessage(newestMessage);
    } else {
      console.log("either I sent message or already read:", newestMessage);
    }
  }, [messages]);
  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col-reverse gap-3 mt-5 rounded-lg p-4 h-[70vh] sm:h-[74vh] overflow-y-auto pb-8 scrollbar-hide"
      style={{
        backgroundImage: `url(${
          chatWallpaperUrl ? chatWallpaperUrl : "/chat.jpg"
        })`,
      }}
    >
      {loading && "loading"}
      {!loading && !messages.length && (
        <p className="text-gray-400 text-center text-sm mt-10">
          No messages yet. Start the conversation!
        </p>
      )}
      {!!messages.length &&
        messages.map((msg, i) => {
          const isSender = msg?.senderId === loggedInUser?.id;
          return (
            <div
              key={i}
              onClick={() => handleMessageSelectedForInfo(msg?.id)}
              className={`flex items-end cursor-pointer ${
                isSender ? "justify-end" : "justify-start"
              }`}
            >
              {" "}
              <span>
                {selectedMessageIdForInfo === msg?.id && isSender && (
                  <MessageInfo msg={msg} you={true} />
                )}
              </span>
              <div
                className={`relative max-w-[90%] px-4 py-2 rounded-2xl  text-sm leading-relaxed
                  ${
                    isSender
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
              >
                <p className="">{msg?.text}</p>
                <div
                  className={`absolute ${
                    isSender ? "right-2" : "left-2"
                  } text-[10px] bottom-[-16] text-gray-700`}
                >
                  {i === 0 ? (
                    <div className="infos flex items-center w-full gap-2">
                      <span>
                        {new Date(msg?.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>

                      <span>
                        {msg.status === "PENDING" && isSender && (
                          <Info size={15} />
                        )}
                        {msg.status === "SENT" && isSender && (
                          <Check size={15} />
                        )}
                        {msg.status === "DELIVERED" && isSender && (
                          <CheckCheck size={15} />
                        )}
                        {msg.status === "READ" && isSender && (
                          // <CheckCheck size={15} color="blue" />
                          <div className="flex gap-1 items-center">
                            seen
                            <Eye size={16} strokeWidth={1.5} />
                          </div>
                        )}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {i == 4 ? (
                  <span className="text-xs text-black bg-gray-100 px-3 rounded-full mt-5">
                    Edited
                  </span>
                ) : (
                  ""
                )}
              </div>
              {/* <span>
                {selectedMessageIdForInfo === msg?.id && !isSender && (
                  <MessageInfo msg={msg} />
                )}
              </span> */}
            </div>
          );
        })}
    </div>
  );
}

export default ChatArea;
