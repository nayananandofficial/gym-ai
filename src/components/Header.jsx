import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
    });
  }, []);

  return (
    <header
      className="relative z-0"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
    >
      <img
        id="header-title-img"
        src="./assets/gymfluencer.png"
        alt="GymFluencer Logo"
      />
      <p
        className="absolute left-80 top-72 text-white text-2xl transform transition-transform ease-in-out duration-300 hover:scale-x-125"
        data-aos-delay="500"
      >
        Excell the art of body-building
      </p>
      <button
        id="join-now"
        className="absolute left-1/2 top-[70%] w-36 h-12 p- bg-black text-white rounded-3xl transform transition-all duration-1000 hover:scale-110"
      >
        Starting today
      </button>
    </header>
  );
};

export default Header;
