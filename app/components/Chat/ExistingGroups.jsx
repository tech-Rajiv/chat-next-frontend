import { Frown } from "lucide-react";
import React from "react";

function ExistingGroups() {
  const existingGroups = false;
  return (
    <div className="mb-5">
      {existingGroups ? (
        ""
      ) : (
        <p className="flex gap-2 items-center text-gray-600">
          {/* <Frown size={16} /> */}
          No groups joined...
        </p>
      )}
    </div>
  );
}

export default ExistingGroups;
