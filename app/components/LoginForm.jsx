"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useFetchPost from "../hooks/useFetchPost";
import { toast } from "sonner";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, setError, postFetchCall } = useFetchPost();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("please fill every feild");

      return;
    }
    console.log("login");

    const responseData = await postFetchCall("/api/login", {
      email,
      password,
    });
    console.log("responseData in func: ", responseData);
    if (responseData) {
      toast.success("Logged in successfully");
      // Wait before navigating — allow cookie to persist
      setTimeout(() => {
        console.log("redirecting to dashboard");
        router.replace("/dashboard");
      }, 800);

      return;
    }
    toast.error("Please try again");
  };
  return (
    <div className="w-full max-w-sm">
      <div className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 p-2 bg-red-100 rounded border border-red-300">
              {error}
            </p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>
        <hr className="mt-6 mb-4" />
        <p className="text-center text-gray-500 text-sm ">
          Not registered?
          <Link
            className="text-blue-500 ml-2 hover:text-blue-800 font-bold"
            href="/signup"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
