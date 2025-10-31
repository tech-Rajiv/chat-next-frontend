"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  console.log("user: ", user);
  return (
    <div className="py-5">
      <h1 className="text-center">
        Welcome back, @<span className="font-medium">{user?.name}</span>
      </h1>
      <div className="img flex justify-center mt-5">
        <Image
          src={"/chatapp.jpg"}
          width={400}
          height={400}
          className="w-2xl rounded-2xl"
          alt="home image"
        />
      </div>
    </div>
  );
}
