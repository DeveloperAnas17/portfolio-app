import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import Image from "next/image";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import figma from "../../assets/figma.png";
import flutter from "../../assets/flutter.png";
import graphql from "../../assets/graphql.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import node from "../../assets/node.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.png";

const Skills = () => {
  const images = [
    figma,
    flutter,
    html,
    javascript,
    node,
    python,
    react,
    redux,
    sass,
    typescript,
  ];

  const programmingLanguages = ["Javascript", "Python", "HTML", " CSS"];
  const datas = ["Firebase", "Sanity", "RestAPI"];
  const Frameworks = [
    "ReactJs",
    "NextJs",
    "Framer Motion",
    "Redux",
    "Tailwind CSS",
    "Styled-Components",
    "Sass",
  ];
  const tools = [
    "Git (Version Control)",
    "Figma",
    "Editor X",
    "Responsive Webdesign",
    "VsCode",
    "No-Code Website",
  ];

  return (
    <div className="app__skills">
      <div className="app__skillsContainer ">
        <div className="app__skillsNames">
          <h1>Skills & Tools</h1>
          <p>These are the things I love working with as a web developer.</p>
          <div className="app__skillsGrid">
            <div className="app__skillGrid1">
              <h1>Programming Language</h1>
              {programmingLanguages.map((language, index) => (
                <ul className="languages flex flex-col" key={index}>
                  <li>{language}</li>
                </ul>
              ))}
            </div>
            <div className="app__skillGrid2">
              <h1>Programming Language</h1>
              {datas.map((data, index) => (
                <ul className="languages flex flex-col" key={index}>
                  <li>{data}</li>
                </ul>
              ))}
            </div>
            <div className="app__skillGrid3">
              <h1>Programming Language</h1>
              {Frameworks.map((framework, index) => (
                <ul className="languages flex flex-col" key={index}>
                  <li>{framework}</li>
                </ul>
              ))}
            </div>
            <div className="app__skillGrid4">
              <h1>Other Skills & Tools</h1>
              {tools.map((tool, index) => (
                <ul className="languages flex flex-col" key={index}>
                  <li>{tool}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="app__skillsRight">
        <div className="app__skillsImages">
          {images.map((img, index) => (
            <div className="" key={index}>
              <Image
                className="app__skillsIcon border"
                src={img}
                width={60}
                height={60}
                alt=""
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item grid grid-cols-2 "
          >
            <div className=" bg-red-300">
              <h2>Programming Language</h2>
              {programmingLanguages.map((language, index) => (
                <div className="" key={index}>
                  <p>{programmingLanguages}</p>
                </div>
              ))}
            </div>
            <div className=" bg-red-300">
              <h2>Programming Language</h2>
              {programmingLanguages.map((language, index) => (
                <div className="" key={index}>
                  <p>{programmingLanguages}</p>
                </div>
              ))}
            </div>
            <div className=" bg-red-300">
              <h2>Programming Language</h2>
              {programmingLanguages.map((language, index) => (
                <div className="" key={index}>
                  <p>{programmingLanguages}</p>
                </div>
              ))}
            </div>
            <div className=" bg-red-300">
              <h2>Programming Language</h2>
              {programmingLanguages.map((language, index) => (
                <div className="" key={index}>
                  <p>{programmingLanguages}</p>
                </div>
              ))}
            </div>
            <div className=" bg-red-300">
              <h2>Programming Language</h2>
              {programmingLanguages.map((language, index) => (
                <div className="" key={index}>
                  <p>{programmingLanguages}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div> */}
      {/* <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
// "app__skills"
