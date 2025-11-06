import { MessageCircleMore, TextAlignJustify } from "lucide-react";
import ProfileComp from "./ProfileComp";

export default function Header() {
  return (
    <div className="p-4 sm:p-5 shadow flex justify-between">
      <h2 className="text-green-500 font-bold text-lg flex gap-5 items-center">
        <div className="logo flex gap-2 items-center">
          ChatApp
          <MessageCircleMore size={20} />
        </div>
      </h2>
      <ProfileComp />
    </div>
  );
}
