import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
function TabSidebar({ onSelect }) {
  return (
    <div className="w-full">
      <div className="close flex justify-end">
        <X size={24} strokeWidth={1.5} onClick={() => onSelect && onSelect()} />
      </div>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default TabSidebar;
