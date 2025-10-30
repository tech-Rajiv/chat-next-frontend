"use client";
import useFetch from "@/app/hooks/useFetch";
import React from "react";

function AllUsers() {
  const { data, loading, error } = useFetch("/users/all-users");
  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Error...";
  }
  console.log(data, "all users");
  return <div>All users</div>;
}

export default AllUsers;
