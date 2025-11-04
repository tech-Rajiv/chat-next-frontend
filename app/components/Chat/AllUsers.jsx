"use client";
import useFetch from "@/app/hooks/useFetch";
import React, { useEffect } from "react";
import ShowAllUsers from "./ShowAllUsers";
import { useDispatch } from "react-redux";
import { addFriendToStore } from "@/app/redux/slices/dataSlice";

function AllUsers({ onSelect }) {
  const { data, loading, error } = useFetch("/users/all-users");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("adding");
    dispatch(addFriendToStore(data));
  }, [data]);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Error...";
  }
  return (
    <div className={""}>
      <ShowAllUsers allUsers={data} onSelect={onSelect} />
    </div>
  );
}

export default AllUsers;
