import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant , fadeIn} from "../utils/motion";


const Hero = () => {
  

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        variants={fadeIn("top", "spring", 0.5 * 2, 0.75)}
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5
       `}
      >
        <div variants={textVariant(1)} className="relative z-20 ">
          <h1 className={`${styles.heroHeadText} text-neutral-content`}>
            Hi, I'm <span className="text-primary">Temwani</span>
          </h1>
          <div
            className={`${styles.heroSubText} flex mt-2 text-neutral-content`}
          >
            I'm a
            <TypeAnimation
              sequence={[
                "Web Developer.",
                1000,
                "Game Developer.",
                1000,
                "Software Engineer.",
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "em", paddingLeft: "5px" }}
              className="text-secondary-focus"
            />
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full z-50">
            <a
              className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
              href="https://www.linkedin.com/in/temwani-munthali/"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
              href="https://discordapp.com/users/799244817014980618"
              target="_blank"
            >
              <FaDiscord size={20} />
            </a>

            <a
              className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
              href="https://github.com/ItsTemz"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Adrian</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
