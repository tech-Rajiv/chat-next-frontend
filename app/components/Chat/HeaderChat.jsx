import React from "react";
import BackButton from "../BackButton";
import { Settings2 } from "lucide-react";
import { useRouter } from "next/navigation";

function HeaderChat({ recieverData, loading }) {
  const router = useRouter();
  return (
    <div className="flex items-center  justify-between">
      <div className="left flex gap-5 items-center">
        <div className="name text-lg flex gap-2 items-center">
          <div className="logo w-9 h-9 rounded-full bg-gray-200"></div>
          <div className="name">{loading ? "..." : recieverData?.name}</div>
        </div>
      </div>
      <button
        onClick={() =>
          router.push(`/dashboard/chat/${recieverData?.id}/settings`)
        }
        className="right p-2 rounded-md outline cursor-pointer"
      >
        <Settings2 size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default HeaderChat;
