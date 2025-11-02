import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { resetAuth } from "../redux/slices/authSlice";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Logout failed. Please try again.");
      }
      dispatch(resetAuth());
      console.log('cleared token, local')
      localStorage.removeItem('token');
      toast.success("logout successfull");
      router.replace("/");
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
}
