import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-2">
      <h1>Home page</h1>
      <Link
        href="/login"
        className="mt-5 text-blue-500 underline cursor-pointer"
      >
        Go to Login
      </Link>
    </div>
  );
}
