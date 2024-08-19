"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Header from "@/components/global/homepage/header";
import Navbar from "@/components/global/Navbar";
// create a home page for my portfolio
export default function Home() {
  return (
    <div className="h-[200vh]">
      <Header />
      <div className="fixed top-0">

      <Navbar />
      </div>
    </div>
  );
}
