"use client";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setAuth, setLoading } from "../redux/slices/authSlice";

function AuthInitializer({ children }) {
  const { loading, error, data } = useFetch("/api/me");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setLoading())
    if (data) {
      console.log("data to be setted on state", data);
      dispatch(setAuth({ user: data }));
    }
  }, [data]);
  if (error) {
    console.log("error geting auth initiler");
  }
  return children;
}

export default AuthInitializer;
