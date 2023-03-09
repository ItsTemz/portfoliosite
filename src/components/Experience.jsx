import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Tilt from "react-tilt";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(0 0 0 / 0.3)",
        color: "rgb(0 0 0 / 1)",
      }}
      contentArrowStyle={{ borderRight: "14px solid hsl(var(--t)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <Tilt className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain hover:scale-150 ease-in duration-300"
          />
        </Tilt>
      }
    >
      <Tilt className="hover:-scale-75 ease-in p-8 rounded-2xl bg-black/50 shadow-2xl ">
        <div className="z-50">
          <h3 className="text-secondary text-[24px] ">{experience.title}</h3>
          <p
            className="text-accent-focus text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="z-50 mt-3 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-neutral-content text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </Tilt>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
