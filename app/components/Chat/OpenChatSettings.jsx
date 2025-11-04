import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings2 } from "lucide-react";

function OpenChatSettings() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Settings2 size={20} strokeWidth={1.5} />
        </PopoverTrigger>
        <PopoverContent>
          <h2>Change Themes</h2>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default OpenChatSettings;
