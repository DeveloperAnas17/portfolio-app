import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import Image from "next/image";
// import { urlFor, client } from "../../client";

const abouts = [
  {
    title: "Web Devloper",
    description: "Kuch mae nahi patah nain kha h",
    img: images.about01,
  },
  {
    title: "Web Devloper",
    description: "Kuch mae nahi patah nain kha h",
    img: images.about01,
  },
  {
    title: "Web Devloper",
    description: "Kuch mae nahi patah nain kha h",
    img: images.about01,
  },
  {
    title: "Web Devloper",
    description: "Kuch mae nahi patah nain kha h",
    img: images.about01,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={about.img} width={140} height={150} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}Jo bhi ho
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description} mujhe iske barr nahi patah
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
