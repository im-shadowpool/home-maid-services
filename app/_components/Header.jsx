import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
   
    <div className="px-6 py-1.5 backdrop-blur-sm border-t-4 border-orange-400 flex justify-between items-center bg-sky-100 md:px-20 shadow-md -z-50">
      <div className="flex items-center w-full">
      <Link
      href={'/'}
      >
        <Image className="hover:opacity-85 transition-all" src={"/logo.svg"} alt="logo" width={190} height={190} />
      </Link>
        <div className="lg:flex hidden items-center gap-8 text-slate-800 hover:text-primary font-medium w-full justify-center">
          <h2 className="bg-[#fff] p-1.5 px-3.5 border-b-2 border-sky-700 hover:border-none hover:bg-primary hover:text-white rounded transition-all cursor-pointer">Home</h2>
          <h2 className="bg-[#fff] p-1.5 px-3.5 border-b-2 border-sky-700 hover:border-none hover:bg-primary hover:text-white rounded transition-all cursor-pointer">Services</h2>
          <h2 className="bg-[#fff] p-1.5 px-3.5 border-b-2 border-sky-700 hover:border-none hover:bg-primary hover:text-white rounded transition-all cursor-pointer">How it Works</h2>
          <h2 className="bg-[#fff] p-1.5 px-3.5 border-b-2 border-sky-700 hover:border-none hover:bg-primary hover:text-white rounded transition-all cursor-pointer">About us</h2>
        </div>
      </div>
      <div className="flex xl:gap-8 gap-3">
      <Button>Get Started</Button>
      <Button>Login</Button>
      </div>
    </div>
  );
}
