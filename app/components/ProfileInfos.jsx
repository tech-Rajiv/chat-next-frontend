"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, CircleX } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProfileInfos() {
  const [localImgUrl, setLocalImgUrl] = useState("");
  const userDetails = useSelector((state) => state.auth?.user);

  const handleProfileSelect = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setLocalImgUrl(url);
  };
  return (
    <div className="py-5 max-w-xl mx-auto">
      <div className="grid gap-8">
        <div className=" flex flex-col gap-3">
          <div className="in flex flex-col gap-2 mt-5">
            <h2 className="flex justify-between gap-2">
              {" "}
              <p>Proifle picture</p>
              {localImgUrl && (
                <button
                  onClick={() => setLocalImgUrl("")}
                  className="flex gap-1 items-center text-sm cursor-pointer"
                >
                  Delete
                  <CircleX size={20} strokeWidth={1.5} />
                </button>
              )}
            </h2>
            <div className="w-full border  h-40 bg-gray-100 rounded-md flex items-center justify-center">
              {!localImgUrl ? (
                <Label htmlFor="displayProfile" className={" "}>
                  <Camera size={30} strokeWidth={1} />
                </Label>
              ) : (
                <img src={localImgUrl} alt="" className=" h-full rounded-md " />
              )}
            </div>
            <Input
              type={"file"}
              id="displayProfile"
              onChange={handleProfileSelect}
              placeholder="select a image"
              className={"max-w-50 hidden"}
            />
          </div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue={userDetails?.name} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Email</Label>
          <Input
            id="username-1"
            name="username"
            disabled
            defaultValue={userDetails?.email}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Bio</Label>
          <Textarea
            id="username-1"
            name="username"
            placeholder="Type your bio here..."
            defaultValue={userDetails?.profile?.status}
          />
        </div>
        <Button>Save changes</Button>
      </div>
    </div>
  );
}

export default ProfileInfos;
