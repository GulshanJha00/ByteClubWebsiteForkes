"use client";

import Navbar from "./components/Navbar";
import FrontLogo from "./components/FrontLogo/FrontLogo";
import Loading from "./components/Loading/loading";
import { useEffect, useState } from "react";
import { Vortex } from "./components/ui/vortex";

export default function Home() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  }, []);

  return loader ? (
    <Loading />
  ) : (
    <>
      <div className="w-full relative rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="absolute flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
        <Navbar />
        <FrontLogo  />
        </Vortex>
      </div>

      <h1>home</h1>
    </>
  );
}
