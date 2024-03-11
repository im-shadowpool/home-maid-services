import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex z-20 lg:flex-row flex-col py-1 ">

      <div className="md:py-20 py-10 basis-1/2">
        <p className="md:text-[4rem] text-center lg:text-start lg:text-[3rem] xl:text-[4.2rem] 2xl:text-[4.5rem] text-[3rem] font-semibold antialiased leading-tight">
          Find Professional <br />{" "}
          <span className="subpixel-antialiased text-[3rem md:text-[4.5rem] lg:text-[4rem] xl:text-[5rem] bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Home and Maid Services
          </span>{" "}
          <br /> Near You.
        </p>

        <p className="text-gray-500 text-center lg:text-start lg:text-[text-md] lg:pr-24 text-lg pt-5">
          Discover unparalleled cleanliness and professionalism with our Home
          Maid Services, tailored to exceed your expectations and leave your
          home gleaming.
        </p>
      </div>
      <div className="hidden lg:flex basis-1/2 md:translate-x-20 items-center">
        <Image width={650} height={100} src={"/maid.svg"} />
      </div>
    </div>
  );
}
