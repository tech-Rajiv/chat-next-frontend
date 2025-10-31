"use client";
import useFetch from "@/app/hooks/useFetch";
import React from "react";
import ShowAllUsers from "./ShowAllUsers";

function AllUsers({ onSelect }) {
  const { data, loading, error } = useFetch("/users/all-users");
  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Error...";
  }

  return (
    <div className={"py-5 max-w-4xl mx-auto"}>
      <div className="">
        <ShowAllUsers allUsers={data} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default AllUsers;
