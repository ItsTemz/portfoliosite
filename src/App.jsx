import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  SideNav,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications, Store } from "react-notifications-component";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-neutral-content">
        <ReactNotifications />
        {/* <button className="btn fixed z-50" onClick={changeTheme} >Theme</button> */}
        <video
          loop="loop"
          muted="muted"
          autoPlay="autoplay"
          playsInline
          className=" h-full w-full fixed inset-0 object-cover z-[-5]"
        >
          <source src="../src/assets/bgvideo.webm" type="video/webm" />
          <source src="../src/assets/bgvideo.mp4" type="video/mp4" />
        </video>

        <SideNav />
        <div className="bg-neutral/20 bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <div className="bg-gradient-to-b from-neutral/20 via-secondary/60 to-neutral-content/80">
          <About />
          <Experience />
        </div>

        <div className="bg-gradient-to-b from-neutral-content/80 to-neutral-content">
          <Tech />
        </div>

        <div className="relative space-background">
          <div className="bg-gradient-to-b from-neutral-content to-neutral-content/60">
            <Works />
          </div>
          <div className="bg-gradient-to-b from-neutral-content/60 via-transparent to-neutral">
            <Contact />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
