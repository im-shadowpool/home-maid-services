import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col py-1 bg-[url('/yellow_abstract.svg')] bg-background bg-no-repeat basis-1/2 bg-contain md:bg-right bg-center">

      <div className='md:py-20 py-10 basis-1/2'>
        <p className="md:text-[70px] text-[50px] font-semibold antialiased leading-tight">
          Find Professional <br /> <span className="subpixel-antialiased text-[65px] bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Home and Maid Services</span> <br /> Near You.
        </p>

        <p className="text-gray-600 md:pr-28 text-lg pt-5 hidden md:block">
          Discover unparalleled cleanliness and professionalism with our Home
          Maid Services, tailored to exceed your expectations and leave your
          home gleaming.
        </p>

      </div>
      <div className=" flex justify-center items-center">
        <Image
            width={700}
            height={100}
            src={'/maid.svg'}
        />
      </div>
      </div>
    
  );
}
