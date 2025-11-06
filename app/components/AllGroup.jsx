import React from "react";
import CreateNewGroup from "./Chat/CreateNewGroup";
import ExistingGroups from "./Chat/ExistingGroups";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function AllGroup({ onSelect }) {
  const router = useRouter();
  return (
    <div className="pl-5">
      <ExistingGroups />
      <button
        onClick={() => {
          router.push("/dashboard/groups/create-group"), onSelect && onSelect();
        }}
        className="p flex items-center gap-2 underline"
      >
        Create new group <ArrowUpRight size={20} />
      </button>
    </div>
  );
}

export default AllGroup;
