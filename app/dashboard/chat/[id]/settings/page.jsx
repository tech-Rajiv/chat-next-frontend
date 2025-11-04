import BackButton from "@/app/components/BackButton";
import { Settings2 } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="btn">
        <BackButton />
      </div>
      <div className="name mt-5">
        <span>Name: </span>
      </div>
    </div>
  );
}
