import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FcMenu } from "react-icons/fc";

import { motion } from "framer-motion";
import Image from "next/image";

import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full flex justify-between items-center px-5 py-2 bg-white shadow-md fixed z-20">
      <div className="app__navbar-logo">
        <Image
          width={80}
          height={90}
          objectFit="contain"
          src={images.logo}
          alt="logo"
        />
      </div>
      <ul className="hidden flex-1 md:flex justify-end space-x-20 items-center list-none ">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="app__flex cursor-pointer mx-4 flex-col p-text"
            key={`link-${item}`}
          >
            <div className=" w-2 h-2 bg-transparent rounded-full mb-2" />
            <a
              className="text-gray-500 decoration-0 flex-col uppercase transition-all duration-300 ease-in-out hover:text-red-500"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className=" w-9 h-9 rounded-full relative flex items-center justify-center bg-blue-00 md:hidden">
        <FcMenu
          className="h-10 w-10 text-white"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-10 p-5 w-4/5 h-screen flex flex-col justify-end items-end bg-white bg-cover bg-no-repeat shadow-md md:hidden"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="h-9 w-9" onClick={() => setToggle(false)} />
            <ul className=" list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li className="m-4" key={item}>
                  <a
                    className="text-gray-500 decoration-0 text-lg uppercase font-semibold transition-all duration-300 ease-in-out hover:text-red-600"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
