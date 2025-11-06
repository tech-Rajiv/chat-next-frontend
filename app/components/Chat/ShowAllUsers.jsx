import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  ArrowUpRight,
  BadgeCheck,
  BadgeCheckIcon,
  ChevronRightIcon,
  ChevronsRight,
  MessageCircleMore,
  Users,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function ShowAllUsers({ allUsers, onSelect }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="lists ">
      {allUsers &&
        allUsers?.map((user) => {
          const isActive = pathname === `/dashboard/chat/${user.id}`;
          return (
            <Item
              key={user.id}
              variant="muted"
              className={`mt-2 rounded-md py-4 mb-4 border cursor-pointer transition-colors
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
  );
}

export default ShowAllUsers;
