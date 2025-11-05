import { MessageCircleMore } from "lucide-react";

import LoginOrOut from "./LoginOrOut";
import CreateNewGroup from "./Chat/CreateNewGroup";
import ProfileComp from "./ProfileComp";

export default function Header() {
  return (
    <div className="p-5 shadow flex justify-between">
      <h2 className="text-green-500 font-bold text-lg flex gap-2 items-center">
        Chat App
        <MessageCircleMore size={20} />
      </h2>
      <ProfileComp />
      {/* <LoginOrOut /> */}
    </div>
  );
}
