import React from "react";
import CreateNewGroup from "./Chat/CreateNewGroup";
import ExistingGroups from "./Chat/ExistingGroups";

function AllGroup() {
  return (
    <div className="mt-5">
      <ExistingGroups />
      <CreateNewGroup />
    </div>
  );
}

export default AllGroup;
