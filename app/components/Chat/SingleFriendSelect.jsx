import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

function SingleFriendSelect({ friend }) {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">
          {friend?.name} / {friend?.email}
        </Label>
      </div>
    </div>
  );
}

export default SingleFriendSelect;
