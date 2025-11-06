import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, User } from "lucide-react";
import React from "react";

function HeaderUser() {
  return (
    <div>
      <h2 className="font-medium flex gap-2 items-center mb-1">
        {/* <User size={20} strokeWidth={1.5} /> */}
        All users
      </h2>
      {/* <div className="py-2 flex gap-2 justify-between">
        <input
          type="search"
          placeholder="Search user"
          className="py-1 border max-w-[60%] rounded-md px-2 "
        />
        <Button variant={"outline"}>
          Add user <Plus size={24} strokeWidth={1.5} />
        </Button>
      </div> */}
    </div>
  );
}

export default HeaderUser;
