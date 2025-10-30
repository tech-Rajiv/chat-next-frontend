import React, { useEffect, useState } from "react";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fecthCall = async (url) => {
    console.log("fetch call for all users");
    try {
      console.log("API_BASE: ", API_BASE);
      const response = await fetch(`${API_BASE}/${url}`);
      const data = await response.json();
      console.log("response: ", response);
      console.log("data: ", data);

      if (!response.ok) {
        setError(data.message || "response failed");
      }
      console.log("success fetch req");
      setData(data);
    } catch (err) {
      setError("A network error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fecthCall(url);
  }, [url]);

  return {
    isLoading,
    error,
    setError,
    data,
  };
}

export default useFetch;
