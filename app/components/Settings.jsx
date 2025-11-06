import { CircleUser } from "lucide-react";
import React from "react";
import ProfileInfos from "./ProfileInfos";
import BackButton from "./BackButton";

function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mt-10 font-medium justify-center items-center flex gap-2">
        <CircleUser size={20} />
        Settings
      </h2>
      <ProfileInfos />
    </div>
  );
}

export default Settings;
