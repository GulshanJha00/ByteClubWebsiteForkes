"use client";


import Navbar from "./components/Navbar";
import FrontLogo from "./components/FrontLogo/FrontLogo";
import Loading from "./components/Loading/loading";
import { useEffect, useState } from "react";


export default function Home() {

  const [loader, setLoader] = useState(false);
    useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  }, []);
  
  return loader ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <FrontLogo />
      <h1>home</h1>
    </>
  );
}
