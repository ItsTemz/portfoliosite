import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { navLinks } from "../constants";
import resume from "../assets/Temwani_Munthali_Resume (2).pdf"

const NavButton = ({ icon, loc, isBtnActive }) => (
  <a
    href={loc}
    className={`btn ${
      isBtnActive ? "btn-primary" : "btn-outline"
    } btn-primary m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300`}
  >
    <div>{icon}</div>
  </a>
);
const NavFullButton = ({ icon, loc, btnText }) => (
  <a
    href={loc}
    className="w-[75%] btn rounded-lg btn-outline bg-accent/30 justify-center items-center p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
  >
    <div>{icon}</div>
    <span>{btnText}</span>
  </a>
);

function SideNav() {
  const [active, setActive] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-neutral/90">
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed btn btn-circle btn-sm bg-transparent top-5 right-5 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-neutral/90 flex flex-col justify-center items-center z-20">
          {navLinks.map((link) => (
            <NavFullButton
              loc={`#${link.id}`}
              isActive={active === link.title}
              icon={link.icon}
              btnText={link.title}
              onClick={() => setActive(link.title)}
            />
          ))}
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10 ">
          <div className="flex flex-col ">
            <div className="tooltip tooltip-right tooltip-secondary" data-tip="Home">
              <NavButton
                icon={<AiOutlineHome size={20} />}
                loc="#main"
                isBtnActive={active == "Home"}
                onClick={() => {
                  setActive("Home");
                  window.scrollTo(0, 0);
                }}
              />
            </div>
            <div className="tooltip tooltip-right tooltip-secondary" data-tip="About">
              <NavButton
                icon={<BsPerson size={20} />}
                loc="#about"
                isBtnActive={active == "About"}
                onClick={() => setActive("About")}
              />
            </div>
            <div className="tooltip tooltip-right tooltip-secondary" data-tip="Work">
              <NavButton
                icon={<AiOutlineProject size={20} />}
                loc="#work"
                isBtnActive={active === "Work"}
                onClick={() => setActive("Work")}
              />
            </div>
            <div className="tooltip tooltip-right tooltip-secondary" data-tip="Contact">
              <NavButton
                icon={<AiOutlineMail size={20} />}
                loc="#contact"
                isBtnActive={active === "Contact"}
                onClick={() => setActive("Contact")}
              />
            </div>
            <div className="tooltip tooltip-right tooltip-secondary" data-tip="Resume">
              <a
                href={resume}
                target="_blank"
                className={`btn btn-primary m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300`}
              >
                <div>
                  <FaFile size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
