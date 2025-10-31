import React from "react";
import AllUsers from "./Chat/AllUsers";

function Tabs({ onSelect }) {
  return (
    <div>
      <AllUsers onSelect={onSelect} />
    </div>
  );
}

export default Tabs;
