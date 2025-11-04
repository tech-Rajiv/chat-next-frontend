import React from "react";
import AllUsers from "./Chat/AllUsers";
import { CircleUser, User } from "lucide-react";

function Tabs({ onSelect }) {
  return (
    <div className="p-5">
      <h2 className="mb-2 font-medium items-center flex gap-2">
        <CircleUser size={20} />
        Chat with...
      </h2>
      <AllUsers onSelect={onSelect} />
    </div>
  );
}

export default Tabs;
