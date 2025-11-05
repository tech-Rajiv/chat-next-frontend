import React from "react";
import WallpaperSelect from "./Chat/WallpaperSelect";

function ThemesComp() {
  return (
    <div className="p-5">
      <h2 className="mb-2 font-medium items-center flex gap-2">Chat Themes</h2>
      <WallpaperSelect />
    </div>
  );
}

export default ThemesComp;
