import React from "react";
import BackButton from "../BackButton";
import { Settings2 } from "lucide-react";

function HeaderChat({ details }) {
  return (
    <div className="flex items-center  justify-between">
      <div className="left flex gap-5 items-center">
        <div className="name text-lg flex gap-2 items-center">
          <div className="logo w-9 h-9 rounded-full bg-gray-200"></div>
          <div className="name">{details?.name}</div>
        </div>
      </div>
      <div className="right p-2 rounded-md outline cursor-pointer">
        <Settings2 size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default HeaderChat;
