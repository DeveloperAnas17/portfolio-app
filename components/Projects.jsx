import React from "react";
import Soccer from "./Soccer";

const Projects = () => {
  return (
    <div className="px-3 md:px-10">
      <h1 className="mt-3 text-5xl text-center font-semibold">Projects</h1>
      <div className="md:mt-4">
        <Soccer />
        <Soccer />
        <Soccer />
        <Soccer />
        <Soccer />
      </div>
    </div>
  );
};

export default Projects;
