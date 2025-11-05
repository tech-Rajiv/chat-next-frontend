import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

function SingleFriendSelect({ friend, handleMembers, selectedIds }) {
  const isChecked = selectedIds.includes(friend.id);
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex items-center gap-3">
        <Checkbox
          id={`friend-${friend.id}`}
          checked={isChecked}
          onCheckedChange={(checked) => handleMembers(friend.id, checked)}
        />
        <Label htmlFor={`friend-${friend.id}`}>
          {friend.name} / {friend.email}
        </Label>
      </div>
    </div>
  );
}

export default SingleFriendSelect;
