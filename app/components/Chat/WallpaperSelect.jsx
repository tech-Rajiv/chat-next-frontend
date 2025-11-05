import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SquareCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { chatThemeUrlStore } from "@/app/redux/slices/dataSlice";
function WallpaperSelect() {
  const allWallpapers = [
    "/chat.png",
    "/chat1.jpg",
    "/chat2.jpg",
    "/chat3.jpg",
    "/chat4.jpg",
    "/chat5.jpg",
  ];
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
      <div className="wallpaper mt-2 bg-gray-50 grid grid-cols-3 gap-3">
        {allWallpapers?.map((wallpaper) => (
          <div key={wallpaper} className={`cover relative shrink-0 `}>
            <Image
              onClick={() => selectWallpaper(wallpaper)}
              src={wallpaper}
              alt="wallpaper"
              width={300}
              height={300}
              className="max-w-[80px] max-h-20 rounded-md outline"
            />
            {chatWallpaperUrl == wallpaper && (
              <div className="ab absolute top-0 right-2 z-10 bg-white">
                <SquareCheck size={20} strokeWidth={1.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WallpaperSelect;
