import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  BadgeCheck,
  BadgeCheckIcon,
  ChevronRightIcon,
  ChevronsRight,
  MessageCircleMore,
  Users,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ShowAllUsers({ allUsers, onSelect }) {
  const pathname = usePathname();
  return (
    <div className={""}>
      <h2 className="mb-2 font-medium px-5 flex gap-2">
        <Users size={20} />
        Chat with...
      </h2>
      <div className="lists p-2">
        {allUsers &&
          allUsers?.map((user) => {
            const isActive = pathname === `/dashboard/chat/${user.id}`;
            return (
              <Item
                key={user.id}
                variant="muted"
                className={`mt-2 rounded-md py-4 mb-3 border cursor-pointer transition-colors
                  ${isActive ? "border-green-500 " : ""}
                  `}
                size="sm"
                asChild
              >
                <Link
                  href={`/dashboard/chat/${user?.id}`}
                  onClick={() => onSelect && onSelect()}
                >
                  <ItemContent>
                    <ItemTitle>{user?.email}</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <ChevronRightIcon className="size-4" />
                  </ItemActions>
                </Link>
              </Item>
            );
          })}
      </div>
    </div>
  );
}

export default ShowAllUsers;
