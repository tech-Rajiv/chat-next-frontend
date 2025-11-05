"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector } from "react-redux";
import SingleFriendSelect from "./SingleFriendSelect";
import { Check, Trash } from "lucide-react";

import { useState } from "react";

function CreateNewGroup() {
  const friends = useSelector((state) => state.data.friends);
  const [image, setImage] = useState("");
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  return (
    <div>
      <div className="grid gap-8">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Group name</Label>
          <Input id="name-1" name="name" defaultValue="New Group" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">
            Add members :{" "}
            <span className="note text-xs text-gray-600">
              (atleast one member)
            </span>
          </Label>

          <div className="lists flex flex-col gap-3 outline p-3 rounded-md">
            {friends &&
              friends.map((friend) => (
                <SingleFriendSelect key={friend?.email} friend={friend} />
              ))}
          </div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name-1">Bio group</Label>
          <Input id="name-1" name="name" defaultValue="New Group" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name-1">Thumbnail</Label>
          <Input
            type="file"
            onChange={handleImageSelect}
            id="group-thumbnail"
            name="thumbnail"
          />
          <div className="img relative w-30 h-20 bg-gray-200 rounded ">
            {image ? (
              <img
                src={image}
                alt="image group"
                className="w-full h-full object-cover  rounded-md"
              />
            ) : (
              <p className="h-full text-xs text-gray-600 flex justify-center items-center">
                no image
              </p>
            )}
            <div className="cross absolute bg-white p-1 cursor-pointer rounded-full right-0 top-[-10]">
              <Trash onClick={() => setImage("")} color="red" size={20} />
            </div>
          </div>
        </div>

        <div className="btns flex justify-between">
          <Button variant={"outline"}>Cancel</Button>
          <Button>
            Create Group
            <Check size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewGroup;
