import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, User, UsersRound } from "lucide-react";
import React from "react";

function HeaderUser() {
  return (
    <div className="mb-3 sm:my-5 ">
      <h2 className="font-medium flex gap-2 items-center mb-1">
        {/* <User size={20} strokeWidth={1.5} /> */}
        All users
      </h2>
      <p className="text-gray-500 text-xs flex gap-2 my-2 items-center">
        {" "}
        <UsersRound size={12} strokeWidth={1.5} />
        Global user-base chat with anyone
      </p>
      {/* <div className="py-2 flex gap-2 justify-between">
        <input
          type="search"
          placeholder="Search user"
          className="py-1 border max-w-[60%] rounded-md px-2 "
        />
      </div> */}
      {/* <Button variant={"secondary"}>
        Add new user <Plus size={24} strokeWidth={1.5} />
      </Button> */}
    </div>
  );
}

export default HeaderUser;
