import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 h-16 top-0 sticky z-20">
      <div className="">
        <h3>WebDevAnas</h3>
      </div>
      <nav className="flex-[0.6] ">
        <ul className="flex  items-center justify-between w-full ">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
