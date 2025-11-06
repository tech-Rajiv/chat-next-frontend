"use client";
import useFetch from "@/app/hooks/useFetch";
import React, { useEffect } from "react";
import ShowAllUsers from "./ShowAllUsers";
import { useDispatch } from "react-redux";
import { addFriendToStore } from "@/app/redux/slices/dataSlice";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

function AllUsers({ onSelect }) {
  const { data, loading, error } = useFetch("/users/all-users");
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(addFriendToStore(data));
  }, [data]);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Error...";
  }
  return (
    <div className={"mb-5 mt-2"}>
      <ShowAllUsers allUsers={data.slice(0, 3)} onSelect={onSelect} />
      <button
        onClick={() => {
          router.push("/dashboard/chat"), onSelect && onSelect();
        }}
        className="mt-5 mb-10 cursor-pointer flex items-center gap-2 underline text-md"
      >
        View all people <ArrowUpRight size={20} />
      </button>
    </div>
  );
}

export default AllUsers;
