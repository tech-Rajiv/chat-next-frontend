import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  CheckCheck,
  CircleCheck,
  LaptopMinimalCheck,
  MonitorCheck,
  SquareCheck,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { chatThemeUrlStore } from "@/app/redux/slices/dataSlice";
import { toast } from "sonner";
function WallpaperSelect({ onSelect }) {
  const allWallpapers = ["/chat.png", "/chat1.jpg", "/chat2.jpg"];
  const chatWallpaperUrl = useSelector(
    (state) => state.data.chatStyles?.themeUrl
  );
  const dispatch = useDispatch();

  const selectWallpaper = (url) => {
    localStorage.setItem("wallpaper-url", url);
    dispatch(chatThemeUrlStore(url));
  };

  return (
    <div className="mt-5">
      <div className="wallpaper mt-2 grid grid-cols-3 gap-2">
        {allWallpapers?.map((wallpaper, i) => (
          <div key={wallpaper} className={`cover relative shrink-0 p-0`}>
            <img
              src={wallpaper}
              alt=""
              onClick={() => {
                selectWallpaper(wallpaper);
                toast.success("Chat wallpaper changed successfully");
              }}
              className={`w-18 sm:w-full   h-18 rounded-md ${
                chatWallpaperUrl == wallpaper ? "shadow outline" : ""
              }`}
            />
            {chatWallpaperUrl == wallpaper && (
              <div className="ab absolute rounded top-0 right-0 z-10 ">
                <Check size={15} strokeWidth={1} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WallpaperSelect;
