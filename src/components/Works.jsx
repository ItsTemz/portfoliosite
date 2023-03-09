import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  techs,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}
        className="bg-transparent p-5 rounded-2xl w-full "
      >
        <div className="card shadow-xl rounded-2xl h-full w-full bg-neutral/90 black-gradient bg-opacity-50">
          <div className="h-[50%] p-4 rounded-2xl overflow-hidden black-gradient">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              dynamicHeight={false}
              className="h-full shadow-2xl"
            >
              {images &&
                images.map((image, index) => (
                  <div className="h-64 w-full object-fill" key={index}>
                    <img
                      src={image.img}
                      className="h-full w-full object-fill"
                    />
                    <p className="legend">{image.legend}</p>
                  </div>
                ))}
            </Carousel>
          </div>

          <div className="card-body w-full">
            <h2 className="card-title text-primary">{name}</h2>
            <p className="text-secondary">{description}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-1 flex-wrap gap-2 justify-start items-center h-full w-[80%]">
                {techs &&
                  techs.map((tech, index) => (
                    <div className="tooltip" data-tip={tech.name} key={index}>
                      <img src={tech.item} height={34} width={34} key={index} />
                    </div>
                  ))}
              </div>

              <div className="flex gap-2 h-full ">
                {source_code_link && (
                  <a
                    className="btn btn-primary "
                    href={source_code_link}
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                )}

                {live_site_link && (
                  <a
                    className="btn btn-primary "
                    href={live_site_link}
                    target="_blank"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-accent-focus text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-3 grid lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
