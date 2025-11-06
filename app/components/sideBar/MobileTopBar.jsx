import { TextAlignJustify } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function MobileTopBar({ onSelect }) {
  const pathname = usePathname();
  const tabs2 = [
    {
      name: "People",
      url: "/dashboard/chat",
    },
    {
      name: "Group",
      url: "/dashboard/groups",
    },
    {
      name: "Status",
      url: "/dashboard/status",
    },
  ];
  const tabs = [
    {
      name: "Home",
      url: "/dashboard",
    },
    {
      name: "Chat",
      url: "/dashboard/chat",
    },
  ];

  const [selectedTab, setSelectedTab] = useState();
  const router = useRouter();

  return (
    <div className="flex items-center gap-5 md:hidden mb-8 mt-3">
      <TextAlignJustify
        size={24}
        onClick={() => onSelect()}
        strokeWidth={1.5}
        className="text-black"
      />
      <div className="tabs outline rounded-md px-5 py-1 flex gap-5 text-[15px]">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => {
              router.push(tab?.url);
              setSelectedTab(tab?.name);
            }}
            className={`${selectedTab === tab?.name ? "text-gray-500" : ""}`}
          >
            {tab?.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MobileTopBar;
