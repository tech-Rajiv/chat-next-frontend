"use client";

import { useLogout } from "../hooks/useLogout";
import Modals from "./Modals";

export default function LogoutButton() {
  const { logout, loading, error } = useLogout();
  const handleLogout = () => {
    console.log("logging out...");
    logout();
  };

  return (
    <Modals
      name="Logout"
      heading="Alert!"
      content="Do you want to logout?"
      btnYesName="Logout"
      btnNoName="Back"
      btnYesFn={handleLogout}
    />
  );
}
