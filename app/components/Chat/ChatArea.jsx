import React from "react";

function ChatArea({ messages, loggedInUser }) {
  return (
    <div className="flex flex-col gap-8 mt-5 rounded-lg p-4 min-h-[70vh] overflow-y-auto bg-gray-100">
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
                <span
                  className={`absolute right-2 text-[10px] bottom-[-16] text-gray-700`}
                >
                  {/* optional timestamp placeholder */}
                  10:35 AM
                </span>
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
