import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function ProfileSidebar({ onSelect }) {
  const router = useRouter();
  return (
    <div className="my-5">
      <button
        onClick={() => {
          router.push("/dashboard/settings");
          onSelect && onSelect();
        }}
        className="outline cursor-pointer px-3 py-2 rounded w-full flex justify-start gap-2 items-center"
      >
        <Settings size={16} strokeWidth={2} />
        <span>Settings</span>
      </button>
    </div>
  );
}

export default ProfileSidebar;
