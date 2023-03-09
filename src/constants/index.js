import {
  avi,
  backend,
  c,
  carrent,
  cplusplus,
  creator,
  css,
  git,
  html,
  javascript,
  jobit,
  MetaD,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  unrealEngine,
  web,
  blender,
  DTDiscordnotification,
  DTHomepage,
  DTMovieDetails,
  DTMovieselected,
  DTRHomescreen,
  DTRGameplay,
  DTRCredits,
  RCGameplay1,
  RCGameplay2,
  RCGameplay3,
  BLApppage,
  electron
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "UnrealEngine",
    icon: unrealEngine,
  },
  {
    name: "electron",
    icon: electron,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "African Village Investments",
    icon: avi,
    iconBg: "#FDFBE2",
    date: "Jan 2022",
    points: [
      "Worked to develop a website for African Village Investments that accurately reflects their mission and goals",
      "Utilized React with tailwind and JavaScript to create an aesthetically pleasing website for African Village Investments.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed web applications and scripts to automate processes and improve operations.",
      "Utilized best practices to ensure the website was maintained and secure.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "3MetaD",
    icon: MetaD,
    iconBg: "#000",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developed a responsive website for the studio using React, JavaScript, Bootstrap Node.js and Express.",
      "Optimized the website for better performance and usability by reducing page load times and optimizing code.",
      "Created a brick breaker clone using Unreal Engine in C++, which included adding power-ups, levels, scoring system and sound effects",
      "Developed a complex backend for the card game using Unreal Engine in C++, including an AI-driven opponent, multiple game modes and a scoring system.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Duck Talk Wheel Picker",
    description:
      "Say goodbye to movie indecision with Duck Talk Wheel Picker! With a simple and easy-to-use interface, you can search for and add movies to a wheel picker that makes selecting a movie a fun game. And for the social movie lovers out there, it even notifies your Discord channel when a movie is picked.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    techs: [
      { name: "React", item: reactjs },
      { name: "Node.Js", item: nodejs },
      { name: "Tailwind", item: tailwind },
      { name: "Mongodb", item: mongodb },
      { name: "Git", item: git },
      { name: "CSS", item: css },
      { name: "HTML", item: html },
    ],
    images: [
      { img: DTHomepage, legend: "Duck Talk Wheel Picker home page" },
      { img: DTDiscordnotification, legend: "Github notification" },
      { img: DTMovieselected, legend: "Movie selected preview" },
      { img: DTMovieDetails, legend: "Movie details preview" },
    ],
    source_code_link: "https://github.com/ItsTemz/DTMN",
    live_site_link: "https://dtwp.vercel.app/",
  },
  {
    name: "Dice The Rolls",
    description:
      "Dice The Rolls is a game where you have to slice and dice different foods and test your precision and preparation skills! This game was made by a small team of talent game developers and artists as a submission for the GMTK Game jam.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    techs: [
      { name: "C++", item: cplusplus },
      { name: "Unreal Engine", item: unrealEngine },
      { name: "Blender", item: blender },
    ],
    images: [
      { img: DTRHomescreen, legend: "Dice the rolls menu screen" },
      { img: DTRGameplay, legend: "Gameplay screenshot" },
      { img: DTRCredits, legend: "Game Credits" },
    ],
    source_code_link: "https://github.com/juizoi/DiceTheRolls",
    live_site_link: "https://tom-paul.itch.io/dice-the-rolls",
  },
  {
    name: "Robo-crusoe",
    techs: [
      { name: "C++", item: cplusplus },
      { name: "Unreal Engine", item: unrealEngine },
      { name: "Blender", item: blender },
    ],
    description:
      "Robo Crusoe is a Metroidvania game made for the Metroidvania Jam 17 with the theme Salvage and Repair! You play as a small bot mechanic who's sole purpose is to fix the head chef of the diner he was activated in.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    images: [
      { img: RCGameplay2, legend: "Gameplay screenshots" },
      { img: RCGameplay3, legend: "Gameplay screenshots" },
      { img: RCGameplay1, legend: "Gameplay screenshots" },
    ],
    source_code_link: "https://github.com/ItsTemz/MetrovaniaGameJam",
    live_site_link: "https://tom-paul.itch.io/robo-crusoe",
  },
  {
    name: "Bug-logger",
    description:
      "React/Electron app that uses a MongoDB Atlas database to keep track of logs",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    techs: [
      { name: "Electron", item: electron },
      { name: "React", item: reactjs },
      { name: "Mongo DB", item: mongodb },
      { name: "Tailwind", item: tailwind },
      { name: "Git", item: git },
      { name: "Css", item: css },
      { name: "HTML", item: html },
    ],
    images: [
      { img: BLApppage, legend: "Screenshot of the application interface" },
    ],
    source_code_link: "https://github.com/ItsTemz/BugLogger",
  },
];

export { services, technologies, experiences, testimonials, projects };
