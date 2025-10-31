import React, { useEffect, useState } from "react";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fecthCall = async (url) => {
    try {
      const response = await fetch(`${API_BASE}${url}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "response failed");
      }
      setData(data?.data);
    } catch (err) {
      setError("A network error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fecthCall(url);
  }, [url]);

  return {
    loading,
    error,
    setError,
    data,
  };
}

export default useFetch;
