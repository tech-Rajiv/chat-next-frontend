import { Frown } from "lucide-react";
import React from "react";

function ExistingGroups() {
  const existingGroups = false;
  return (
    <div className="mb-2">
      {existingGroups ? (
        ""
      ) : (
        <p className="flex gap-2 items-center text-gray-600">
          No groups joined...
        </p>
      )}
    </div>
  );
}

export default ExistingGroups;
