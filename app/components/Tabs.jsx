import React from "react";
import AllUsers from "./Chat/AllUsers";
import { User } from "lucide-react";

function Tabs({ onSelect }) {
  return (
    <div className="p-5">
      <h2 className="mb-2 font-medium  flex gap-2">
        <User size={20} />
        Chat with...
      </h2>
      <AllUsers onSelect={onSelect} />
    </div>
  );
}

export default Tabs;
