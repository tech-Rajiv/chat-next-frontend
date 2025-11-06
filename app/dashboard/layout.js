"use client";
import { useState } from "react";
import ThemesComp from "../components/ThemesComp";
import ProfileSidebar from "../components/ui/ProfileSidebar";
import TabSidebar from "../components/sideBar/TabSidebar";
import { TextAlignJustify, X } from "lucide-react";
import MobileTopBar from "../components/sideBar/MobileTopBar";
import Tabs from "../components/Tabs";
import TabsGroup from "../components/TabsGroup";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (drawer on mobile) */}
      <div
        className={`fixed  inset-y-0 left-0 bg-white border w-70 shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-70 lg:w-96`}
      >
        <div className="relative p-5 sm:p-8 mx-auto flex flex-col w-full h-full justify-between">
          {/* <TabSidebar onSelect={() => setSidebarOpen(false)} /> */}
          <div>
            <div className="md:hidden flex justify-end">
              <X
                size={24}
                strokeWidth={1.5}
                onClick={() => setSidebarOpen(false)}
              />
            </div>
            <Tabs onSelect={() => setSidebarOpen(false)} />
            <hr />
            {/* <TabsGroup onSelect={() => setSidebarOpen(false)} /> */}
            <ThemesComp onSelect={() => setSidebarOpen(false)} />
          </div>
          <div>
            {/* <ProfileSidebar onSelect={() => setSidebarOpen(false)} /> */}
          </div>
          <div className="absolute bottom-5 flex justify-center items-end">
            @rajiv(2025) all rights reserved
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30  md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Top bar for mobile */}
        <MobileTopBar onSelect={() => setSidebarOpen(!sidebarOpen)} />
        {children}
      </div>
    </div>
  );
}
