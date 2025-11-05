import { CircleUser } from "lucide-react";
import React from "react";

function Settings() {
  return (
    <div>
      <h2 className="mb-2 font-medium items-center flex gap-2">
        <CircleUser size={20} />
        Settings
      </h2>
    </div>
  );
}

export default Settings;
