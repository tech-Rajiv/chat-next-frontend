"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUpRight,
  ChevronRight,
  CircleUser,
  MoveUpRight,
} from "lucide-react";
import LoginOrOut from "./LoginOrOut";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function ProfileComp() {
  const userDetails = useSelector((state) => state.auth?.user);
  const router = useRouter();
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <CircleUser size={30} strokeWidth={1.5} />
        </PopoverTrigger>
        <PopoverContent className="max-w-100 mr-4 sm:mr-5">
          <div className="grid gap-4 p-1">
            {userDetails?.id ? (
              <div className="space-y-2 flex justify-between">
                <div className="leading-none font-medium">
                  <h2>Profile</h2>
                  <p className="mt-4 text-muted-foreground text-sm flex gap-2">
                    <span>Name:</span>
                    {userDetails?.name}
                  </p>
                  <p className="mt-2 text-muted-foreground text-sm flex gap-2">
                    <span>Email:</span>
                    {userDetails?.email}
                  </p>
                  <button
                    onClick={() => router.push("/dashboard/settings")}
                    className="mt-2 text-muted-foreground text-sm flex cursor-pointer"
                  >
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                    <span>Edit your profile here...</span>
                  </button>
                </div>
                <div className="img w-14 h-14 rounded-full bg-gray-200 border border-2"></div>
              </div>
            ) : (
              <p className="mt-2 text-muted-foreground text-sm flex gap-2">
                Login to view profile
              </p>
            )}

            <p className="flex justify-between">
              <LoginOrOut />
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ProfileComp;
