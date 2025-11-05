"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector } from "react-redux";
import SingleFriendSelect from "./SingleFriendSelect";
import { Check, Trash } from "lucide-react";
import { useState } from "react";
import useFetchPost from "@/app/hooks/useFetchPost";
import { Checkbox } from "@/components/ui/checkbox";

function CreateNewGroup() {
  const friends = useSelector((state) => state.data.friends);
  const you = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    group_name: "",
    group_bio: "",
    group_members: [],
    group_thumbnail_url: "",
    group_admin_id: "",
  });
  const [error, setError] = useState({
    name: "",
    member: "",
    bio: "",
    thumbnail: "",
  });
  const {
    loading: submitLoading,
    error: sendError,
    postFetchCall,
  } = useFetchPost();
  const [image, setImage] = useState("");

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = async () => {
    if (formData.group_members.length <= 1) {
      setError((prev) => ({
        ...prev,
        member: "add aat least one other member",
      }));
      return;
    }
    const copyPayload = formData;
    copyPayload.group_admin_id = you?.id;
    copyPayload.group_members.push(you?.id);
    console.log("caling backend", formData);
    const data = await postFetchCall("/group/create-group", { ...copyPayload });
    console.log("data: ", data);
  };

  const handleMembers = (friendId, isChecked) => {
    setFormData((prev) => {
      const current = prev.group_members;
      return {
        ...prev,
        group_members: isChecked
          ? [...new Set([...current, friendId])]
          : current.filter((id) => id !== friendId),
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div className="grid gap-8">
        <div className="grid gap-3">
          <Label htmlFor="group_name">Group name</Label>
          <Input
            id="group_name"
            onChange={handleOnChange}
            name="group_name"
            placeholder="New Group"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">
            Add members :{" "}
            <span className="note text-xs text-gray-600">
              ({formData?.group_members?.length} members)
            </span>
          </Label>

          <div className="lists flex flex-col gap-3 outline p-3 rounded-md">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" checked disabled />
              <Label htmlFor="terms">you / {you?.email}</Label>
            </div>
            {friends &&
              friends.map((friend) => (
                <SingleFriendSelect
                  key={friend?.email}
                  friend={friend}
                  handleMembers={handleMembers}
                  selectedIds={formData.group_members}
                />
              ))}
          </div>
          {error?.member && (
            <p className="text-red-500 text-xs">{error?.member}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="group_bio">Bio</Label>
          <Input
            id="group_bio"
            onChange={handleOnChange}
            name="group_bio"
            placeholder="cool bio for group"
          />
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
          <Button disabled={submitLoading} onClick={handleSubmit}>
            {submitLoading ? "Creating..." : "Create Group"}

            <Check size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewGroup;
