"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer flex gap-2 items-center"
    >
      <ChevronLeft size={20} strokeWidth={1.5} />
      Back
    </button>
  );
}

export default BackButton;
