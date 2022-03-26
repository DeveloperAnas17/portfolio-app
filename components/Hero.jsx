import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="  h-screen  max-w-7xl mx-auto border-b-4 border-black">
      <Header />
      <div className="w-full flex items-center justify-center flex-col my-10 space-y-2">
        <h1 className="text-2xl md:text-5xl font-bold">I'm Anas Abbasi.</h1>
        <h2 className="text-sm md:text-2xl text-gray-400 font-semibold">
          Front-End Web Developer
        </h2>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Hero;
