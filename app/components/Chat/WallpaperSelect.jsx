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
function WallpaperSelect() {
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
    <div>
      <div className="wallpaper mt-2 grid grid-cols-3 gap-2">
        {allWallpapers?.map((wallpaper) => (
          <div key={wallpaper} className={`cover relative shrink-0 p-0`}>
            <img
              src={wallpaper}
              alt=""
              onClick={() => selectWallpaper(wallpaper)}
              className={`w-18 sm:w-full   h-18 rounded-md ${
                chatWallpaperUrl == wallpaper ? "shadow outline" : ""
              }`}
            />
            {/* <Image
              onClick={() => selectWallpaper(wallpaper)}
              src={wallpaper}
              alt="wallpaper"
              width={300}
              height={300}
              className="max-w-[80px] max-h-20 rounded-md outline"
            /> */}
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
