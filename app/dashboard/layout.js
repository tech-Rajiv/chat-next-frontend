"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Tabs from "../components/Tabs";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (drawer on mobile) */}
      <div
        className={`fixed  inset-y-0 left-0 bg-white border w-64 p-1 shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-64 lg:w-96`}
      >
        <div className="sm:px-5 mx-auto">
          <Tabs onSelect={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Top bar for mobile */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}
