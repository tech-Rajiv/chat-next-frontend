"use client";

import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import Modals from "./Modals";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function LoginOrOut() {
  const { logout, loading, error } = useLogout();
  const userID = useSelector(state => state.auth?.user?.id)
  console.log(userID,"user id form header")
  const router = useRouter()
  const handleLogout = () => {
    console.log("logging out...");
    logout();
  };

  const handleLogin = () => {
router.push('/login')
  }

  return (
    <div className="p">
      {
        !userID ? <div className="login">
          <Button onClick={handleLogin} variant={'outline'}>Login</Button>
        </div> :  <Modals
        name="Logout"
        heading="Alert!"
        content="Do you want to logout?"
        btnYesName="Logout"
        btnNoName="Back"
        btnYesFn={handleLogout}
      />
      }
    
    </div>
  );
}
