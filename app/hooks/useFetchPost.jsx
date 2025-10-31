import React, { useState } from "react";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
function useFetchPost() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const postFetchCall = async (url, bodyParams) => {
    setError("");
    setLoading(true);
    let result = false;
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ very important for cookies
        body: JSON.stringify(bodyParams),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "response failed");
        return false;
      }

      result = data;
    } catch (err) {
      setError("A network error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
    return result;
  };
  return {
    loading,
    error,
    setError,
    postFetchCall,
  };
}

export default useFetchPost;
