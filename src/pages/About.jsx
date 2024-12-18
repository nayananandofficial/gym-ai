import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowButton from "../components/ArrowButton";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="h-screen w-full -z-20 bg-black/90"
      data-aos="zoom-in"
    >
      <img
        src="src/assets/about-bg.png"
        className="absolute top-auto left-auto h-full w-1/2 m-10 p-6 z-0"
        alt="a nice gym hall"
      />
      <main className="relative flex flex-col max-w-screen-sm float-right text-white justify-center h-full px-10">
        <h2 className="text-6xl font-semibold py-3">Empowering your Fitness Journey</h2>
        <p className="text-justify py-3">At GymFluencer, we are passionate about helping you achieve your fitness goals and transform your lifestyle. Founded with the vision of making fitness accessible and enjoyable for everyone, our gym provides a welcoming environment, cutting-edge equipment, and expert trainers who are dedicated to your success. <br /><br />
        We believe that fitness is more than just a workout—it's a way of life. Whether you're a beginner or a seasoned athlete, our diverse range of classes, personalized training programs, and state-of-the-art facilities cater to all fitness levels. <br /><br />
       Join us and become a part of a community that inspires, motivates, and celebrates every step of your journey. At GymFluencer, your goals are our mission!</p>
       <button
        id="join-now"
        className="relative w-36 h-12 mt-10 bg-black mx-auto text-white rounded-3xl transform transition-all duration-1000 hover:scale-110">
        Join now
      </button>
      </main>
      <ArrowButton href='#workouts'/>
    </section>
  );
};

export default About;
