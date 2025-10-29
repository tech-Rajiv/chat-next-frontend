import React, { useState } from "react";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
function useFetchPost() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const postFetchCall = async (url, bodyParams) => {
    setError("");
    setIsLoading(true);
    let result = false;
    try {
      console.log("API_BASE: ", API_BASE);
      const response = await fetch(`${API_BASE}/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyParams),
      });

      const data = await response.json();
      console.log("response: ", response);
      console.log("data: ", data);

      if (!response.ok) {
        setError(data.message || "response failed");
        return false;
      }
      console.log("success post req");
      result = data;
    } catch (err) {
      setError("A network error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
    return result;
  };
  return {
    isLoading,
    error,
    setError,
    postFetchCall,
  };
}

export default useFetchPost;
