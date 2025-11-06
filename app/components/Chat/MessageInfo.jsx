import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
function MessageInfo({ msg, you }) {
  return (
    <div>
      <Popover>
        <PopoverTrigger className="cursor-pointer">
          <EllipsisVertical size={16} strokeWidth={1.5} />
        </PopoverTrigger>
        <PopoverContent className="max-w-60 text-xs p-3 rounded-xl border border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm space-y-2 ">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-neutral-800 pb-1">
            Message Info
          </h2>

          <div className="space-y-1 text-gray-600 dark:text-gray-400">
            <div className="line-clamp-2">
              {you ? "You: " : ""}{" "}
              {msg?.text?.slice(0, 80) || "No message text"}...
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sent:</span>
              <span>15:00pm</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Seen:</span>
              <span>16:00pm</span>
            </div>

            <div className="flex  border-t pt-3 border-gray-100 dark:border-neutral-800 justify-between">
              <Button variant={"secondary"} disabled className={"text-xs"}>
                Edited already{" "}
              </Button>
              <Button variant={"secondary"} className={"text-red-500 text-xs"}>
                Delete{" "}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MessageInfo;
