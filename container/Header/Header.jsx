import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Micael</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <Image
        width={240}
        height={200}
        objectFit="contain"
        src={images.aman}
        alt="profile_bg"
      />
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        alt="profile_circle"
        className="overlay_circle"
      >
        <Image
          width={240}
          height={200}
          objectFit="contain"
          src={images.circle}
          alt="profile_bg"
        />
      </motion.div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <Image
            width={60}
            height={60}
            objectFit="contain"
            src={circle}
            alt="profile_bg"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
