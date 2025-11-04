import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { CirclePlus } from "lucide-react";
import { useSelector } from "react-redux";
import SingleFriendSelect from "./SingleFriendSelect";
function CreateNewGroup() {
  const friends = useSelector((state) => state.data.friends);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="outline px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50 flex gap-2 items-center">
            <CirclePlus size={16} />
            Create Group
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create group</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Group name</Label>
              <Input id="name-1" name="name" defaultValue="New Group" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Add members</Label>
              <div className="lists flex flex-col gap-3 outline p-3 rounded-md">
                {friends &&
                  friends.map((friend) => (
                    <SingleFriendSelect friend={friend} />
                  ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className={"bg-green-500 hover:bg-green-600 text-white"}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateNewGroup;
