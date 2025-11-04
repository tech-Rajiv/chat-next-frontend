"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LogOut } from "lucide-react";

import React from "react";

function Modals({ name, heading, content, btnYesName, btnNoName, btnYesFn }) {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="p flex gap-1 items-center">
            {name}
            <LogOut size={20} />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{heading}</AlertDialogTitle>
            <AlertDialogDescription>{content}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{btnNoName}</AlertDialogCancel>
            <AlertDialogAction onClick={btnYesFn}>
              {btnYesName}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Modals;
