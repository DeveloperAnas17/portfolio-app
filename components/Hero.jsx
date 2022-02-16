import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-10 h-auto items-center max-w-7xl mx-auto border-b-4 border-black">
      <div className="flex flex-col flex-1 ">
        <h3 className="text-center md:text-left text-gray-400 font-semibold uppercase">
          Hi There, My name is <span className="text-black">Anas.</span>
        </h3>
        <br />
        <h1 className="text-3xl md:text-5xl font-extrabold text-center md:text-left">
          I’m a Freelance Website Designer from Southampton, U.K.!
        </h1>
        <hr className="w-10 mt-5 font-bold" />
        <h2 className="text-lg font-medium text-gray-600">
          I craft high-performing, beautiful websites that are{" "}
          <br className="hidden md:inline-block" />
          <span className="text-black font-extrabold">
            conversion-focused, brand-accurate, & people-friendly.
          </span>
        </h2>

        <div></div>
      </div>
      <div className="flex flex-1">
        <img
          src="https://uploads-ssl.webflow.com/603a00d2496482478db36f56/603a2295b15be36b6434a6be_hero-eli%402x-p-800.png"
          alt=""
          className="h-42 w-46"
        />
      </div>
    </div>
  );
};

export default Hero;
