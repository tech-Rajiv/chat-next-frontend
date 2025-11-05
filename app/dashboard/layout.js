"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Tabs from "../components/Tabs";
import TabsGroup from "../components/TabsGroup";
import Settings from "../components/Settings";
import ThemesComp from "../components/ThemesComp";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (drawer on mobile) */}
      <div
        className={`fixed  inset-y-0 left-0 bg-white border w-70 p-1 shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-64 lg:w-96`}
      >
        <div className="sm:px-5 mx-auto flex flex-col w-full h-[80%] justify-between">
          <div>
            <Tabs onSelect={() => setSidebarOpen(false)} />
            <hr />
            <TabsGroup onSelect={() => setSidebarOpen(false)} />
          </div>
          <div>
            <ThemesComp />
            <p className="flex justify-center items-end">
              @rajiv all rights reserved
            </p>
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
        <div className="flex items-center justify-between md:hidden mb-3">
          {/* <Button
            variant="outline"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button> */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="underline"
          >
            Chat
          </button>
          <div>Status</div>
        </div>

        {children}
      </div>
    </div>
  );
}
