import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full glass btn-disabled bg-secondary-focus p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px]
          flex justify-evenly items-center flex-col
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-base-content text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a software engineer with a Bachelors Degree in Computer Science, I'm
        like a superhero but with a keyboard instead of a cape. My expertise is
        in C++, JavaScript, and Python, with a focus on game and web
        development. I'm a wizard in React, three.js, and node.js for creating
        responsive and user-friendly web applications. I've also honed my skills
        in Unreal Engine for immersive gaming experiences. With my collaborative
        mindset and passion for learning, I'm always ready to be your trusty
        sidekick on any project. So, if you're looking for a skilled and fun
        software engineer, I'm your guy!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
