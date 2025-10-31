import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { resetAuth } from "../redux/slices/authSlice";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const logout = async () => {
    setLoading(true);
    setError(null);
    const dispatch = useDispatch();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Logout failed. Please try again.");
      }
      dispatch(resetAuth());
      toast.success("logout successfull");
      router.push("/");
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
}
