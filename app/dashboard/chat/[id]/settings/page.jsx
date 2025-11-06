"use client";
import BackButton from "@/app/components/BackButton";
import WallpaperSelect from "@/app/components/Chat/WallpaperSelect";
import { CircleUserRound } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const chatingWith = useSelector((state) => state.data.chatingWith);
  console.log(chatingWith, "chating withhh");
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="btn">
        <BackButton />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="img relative  h-50  bg-gray-100 rounded ">
          {chatingWith?.profile?.avatarUrl ? (
            <img
              src={image}
              alt="image group"
              className="max-w-xl  min-h-40 mx-auto  bg-gray-300 object-cover  rounded-md"
            />
          ) : (
            <p className="flex justify-center items-center h-full text-gray-600">
              <CircleUserRound size={80} strokeWidth={0.5} />
            </p>
          )}
        </div>
        <div>Name: {chatingWith?.name}</div>
        <div>Email: {chatingWith?.email}</div>
        <div>Bio: {chatingWith?.profile?.status ?? "No bio for now"}</div>
        {/* <div>
          <h2>Bio</h2>
          <div className="bio bg-gray-50 rounded-md  min-h-10 text-gray-600">
            {chatingWith?.profile?.status ?? "no bio right now"}
          </div>
        </div> */}
      </div>
    </div>
  );
}
