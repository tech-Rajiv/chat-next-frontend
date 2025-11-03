import { Check, CheckCheck, Info } from "lucide-react";
import React, { useEffect, useRef } from "react";

function ChatArea({ messages, loggedInUser }) {
  const chatContainerRef = useRef();
  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col-reverse gap-3 mt-5 rounded-lg p-4 h-[70vh] overflow-y-auto bg-gray-100 pb-8"
    >
      {messages.length ? (
        messages.map((msg, i) => {
          const isSender = msg?.senderId === loggedInUser?.id;
          return (
            <div
              key={i}
              className={`flex ${isSender ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-[70%] px-4 py-2 rounded-2xl  text-sm leading-relaxed
                  ${
                    isSender
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
              >
                <p>{msg.text}</p>
                <div
                  className={`absolute ${
                    isSender ? "right-2" : "left-2"
                  } text-[10px] bottom-[-16] text-gray-700`}
                >
                  {i === 0 ? (
                    <div className="infos flex items-center gap-2">
                      <span>
                        {new Date(msg?.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>

                      <span>
                        {msg.status === "PENDING" && isSender && (
                          <Info size={10} />
                        )}
                        {msg.status === "SENT" && isSender && (
                          <Check size={10} />
                        )}
                        {msg.status === "DELIVERED" && isSender && (
                          <CheckCheck size={16} />
                        )}
                        {msg.status === "SEEN" && isSender && (
                          <CheckCheck size={10} color="blue" />
                        )}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400 text-center text-sm mt-10">
          No messages yet. Start the conversation!
        </p>
      )}
    </div>
  );
}

export default ChatArea;
