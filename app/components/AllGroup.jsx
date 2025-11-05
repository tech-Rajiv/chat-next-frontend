import React from "react";
import CreateNewGroup from "./Chat/CreateNewGroup";
import ExistingGroups from "./Chat/ExistingGroups";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function AllGroup() {
  const router = useRouter();
  return (
    <div className="mt-5">
      <ExistingGroups />
      <button
        onClick={() => router.push("/dashboard/groups/create-group")}
        className="p flex items-center gap-2 underline"
      >
        Create new group <ArrowUpRight size={20} />
      </button>
      {/* <CreateNewGroup /> */}
    </div>
  );
}

export default AllGroup;
