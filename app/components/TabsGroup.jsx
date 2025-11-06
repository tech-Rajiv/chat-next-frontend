import React from "react";
import AllGroup from "./AllGroup";
import { Users, Users2 } from "lucide-react";

function TabsGroup({ onSelect }) {
  return (
    <div className="my-5">
      <h2 className="my-2 font-medium  flex gap-2">
        <Users size={20} />
        Groups...
      </h2>
      <AllGroup onSelect={onSelect} />
    </div>
  );
}

export default TabsGroup;
