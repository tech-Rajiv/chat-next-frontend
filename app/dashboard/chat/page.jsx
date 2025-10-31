"use client";
import AllUsers from "@/app/components/Chat/AllUsers";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    console.log("API Base:", process.env.NEXT_PUBLIC_API_URL);
  }, []);
  return <h1>dd</h1>;
}
