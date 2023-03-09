import React from 'react'
import { motion } from "framer-motion";
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-ro flex-wrap justify-center gap-18">
      {technologies.map((technology) => (
        <motion.div
          className="w-28 h-28"
          key={technology.name}
          animate={{
            y: [0, Math.random() * (24 - 15) + 15, 0],
            x: [0, Math.random() * (24 - 18) + 18, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "");