import React from "react";
import BackButton from "../BackButton";
import { useRouter } from "next/navigation";

function HeaderChat({ recieverData, loading, onlineUsers }) {
  console.log("onlineUsers: ", onlineUsers);
  const router = useRouter();
  return (
    <div className="flex items-center  justify-between">
      <div className="left flex gap-3 sm:gap-5 items-center">
        <BackButton />
        <div
          onClick={() =>
            router.push(`/dashboard/chat/${recieverData?.id}/settings`)
          }
          className="name text-lg flex gap-3 items-center"
        >
          <div className="logo w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer">
            {recieverData?.name?.slice(0, 2).toUpperCase()}
          </div>

          <div className="name flex flex-col justity-center cursor-pointer">
            <div className="name ">{loading ? "..." : recieverData?.name}</div>
            <div className="status -m-.5">
              {onlineUsers?.includes(recieverData?.id) ? (
                <div className="text-[10px] text-green-500 flex gap-1 items-center">
                  {" "}
                  <div className="dot w-2 h-2 rounded-full bg-green-500"></div>
                  Online
                </div>
              ) : (
                <div className="text-[10px] text-gray-500 flex gap-1 items-center">
                  {" "}
                  <div className="dot w-2 h-2 rounded-full bg-gray-500"></div>
                  Offline
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={() =>
          router.push(`/dashboard/chat/${recieverData?.id}/settings`)
        }
        className="right p-2 rounded-md outline cursor-pointer"
      >
        <Settings2 size={20} strokeWidth={1.5} />
      </button> */}
    </div>
  );
}

export default HeaderChat;
