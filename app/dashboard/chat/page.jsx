"use client";
import AllUsers from "@/app/components/Chat/AllUsers";
import ShowAllUsers from "@/app/components/Chat/ShowAllUsers";
import HeaderUser from "@/app/components/friends/HeaderUser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [searched, setSearched] = useState();
  const allUsers = useSelector((state) => state.data?.friends);
  useEffect(() => {}, []);
  return (
    <div className="wrapper max-w-4xl mx-auto">
      <HeaderUser />
      <ShowAllUsers allUsers={allUsers} />
    </div>
  );
}
