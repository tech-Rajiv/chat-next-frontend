"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer p-2 outline rounded-md"
    >
      <ChevronLeft size={20} strokeWidth={1.5} />
    </button>
  );
}

export default BackButton;
