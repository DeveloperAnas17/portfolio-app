import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div className="relative max-w-[1400px] py-6  mx-auto px-10">
      {/* <div className="w-full mx-auto mt-3 flex justify-center items-center text-center max-w-md">
        <h1 className="text center cormo font-semibold text-5xl uppercase">
          Discover your personal style
        </h1>
      </div> */}
      <div className="flex flex-col-reverse space-y-7 items-center sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex-[0.5] mt-7 sm:mt-0 flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <div className=" max-w-md">
            <h4 className="text-xs text-center sm:text-left">I am Anas</h4>
            <h1 className="text-4xl font-semibold text-center sm:text-left ">
              I’m a Freelance Website Designer from Southampton, U.K.!
            </h1>
            <h3 className="mt-1 text-center sm:text-left">
              I craft high-performing, beautiful websites that are
              conversion-focused, brand-accurate, & people-friendly.
            </h3>
          </div>
          <button className="bg-[#F7DEC0] border text-black flex items-center justify-center h-12 w-36 mt-5 rounded-sm cursor-pointer transition-all duration-150 hover:bg-transparent hover:text-[#F7DEC0] ">
            Hire Me
          </button>
        </div>
        <div className="flex-[0.5] relative h-[200px] w-[200px] sm:h-[360px] md:h-[420px] md:w-[300px] flex justify-end">
          <Image src={profile} alt="profile" objectFit="contain" />
        </div>
      </div>

      <div className="absolute right-[20%] -z-20 top-0  w-[300px] h-[300px] bg-[#CB945E] rounded-full opacity-90 blur-[140px]"></div>
    </div>
  );
};

export default Header;
