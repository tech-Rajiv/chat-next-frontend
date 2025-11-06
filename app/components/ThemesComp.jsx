import React from "react";
import WallpaperSelect from "./Chat/WallpaperSelect";

function ThemesComp({ onSelect }) {
  return (
    <div className="my-5">
      <h2 className="mb-2 font-medium items-center flex gap-2">Chat Themes</h2>
      <WallpaperSelect onSelect={onSelect} />
    </div>
  );
}

export default ThemesComp;
