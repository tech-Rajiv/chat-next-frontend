import BackButton from "@/app/components/BackButton";
import CreateNewGroup from "@/app/components/Chat/CreateNewGroup";
import { CircleUser, Users } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <h2 className="mb-5 mt-5  font-medium items-center flex justify-center gap-2">
        <Users size={20} />
        Create new group
      </h2>
      <div className="p bg-white shadow p-4 sm:p-8 rounded-lg">
        <CreateNewGroup />
      </div>
    </div>
  );
}

export default page;
