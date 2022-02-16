import Image from "next/image";
import React from "react";
import AI_Thumb from "../public/AI_Thumb.png";

const Soccer = () => {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="mt-5 md:mt-0 md:w-[950px]">
        <div className="">
          <h1 className="font-semibold text-3xl">Soccer Information </h1>
          <h3 className="font-medium text-lg mt-3 mb-6 text-[#979393]">
            $40 Million Raised by Mighty Buildings in Series B Funding Add More
            Text to it
          </h3>
          <a href="" target="_blank" className=" uppercase">
            <h3 className="font-medium border-b-2 w-44 border-black ">
              View Projects
            </h3>
          </a>
        </div>
        <div className=""></div>
      </div>
      <div className="md:ml-20">
        {/* <Image src={AI_Thumb} width={500} height={500} alt="" className="" /> */}
        <video
          loop
          muted
          autoPlay
          src="https://nerby.com/wp-content/uploads/2020/12/Clash-Royale.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Soccer;
