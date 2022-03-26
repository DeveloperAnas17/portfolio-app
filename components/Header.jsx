import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex items-center justify-between px-12 h-16">
      <Link className="flex flex-1" href={"/"}>
        <a className="text-2xl italic text-red-500 font-semibold">DevAnas</a>
      </Link>
      <div className="hidden md:flex items-center justify-end flex-grow">
        <p className="w-24 h-8 text-base font-semibold hover:bg-gray-200 rounded-3xl flex items-center justify-center transition duration-250 ease-in">
          Home
        </p>
        <p className="w-24 h-8 text-base font-semibold hover:bg-gray-200 rounded-3xl flex items-center justify-center transition duration-250 ease-in">
          About
        </p>
        <p className="w-24 h-8 text-base font-semibold hover:bg-gray-200 rounded-3xl flex items-center justify-center transition duration-250 ease-in">
          Blog
        </p>
        <p className="w-24 h-8 text-base font-semibold hover:bg-gray-200 rounded-3xl flex items-center justify-center transition duration-250 ease-in">
          Project
        </p>
      </div>
    </header>
  );
};

export default Header;
