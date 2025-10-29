"use client";

import SignupForm from "@/app/components/SignupForm";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-2">
      <SignupForm />
    </div>
  );
}
