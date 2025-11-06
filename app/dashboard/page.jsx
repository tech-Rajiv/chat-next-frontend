"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CustomSingleSkeleton from "../components/ui/CustomSingleSkeleton";
import AccordianForHome from "../components/ui/AccordianForHome";
import Footer from "../components/Footer";

export default function Dashboard() {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <h1 className="text-center flex  justify-center gap-2">
        Welcome back,
        {loading ? (
          <div className="w-20 h-5 ml-2">
            {" "}
            <CustomSingleSkeleton />
          </div>
        ) : (
          <span className="font-medium">{user?.name}</span>
        )}
      </h1>
      <div className="img flex justify-center my-5">
        <Image
          src={"/chatapp.jpg"}
          width={400}
          height={400}
          className="w-2xl rounded-2xl"
          alt="home image"
        />
      </div>

      <AccordianForHome />
      <Footer />
    </div>
  );
}
