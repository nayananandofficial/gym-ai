import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowButton from "../components/ArrowButton";

const workoutItems = [
  { title: "Strength Training", description: "Build strength with weights", bg: "url('src/assets/strength-bg.png" },
  { title: "Cardio", description: "Improve endurance with HIIT", bg: "url('src/assets/cardio-bg.png')"},
  { title: "Yoga", description: "Enhance flexibility and relax", bg: "url('src/assets/yoga-bg.png')"},
  { title: "CrossFit", description: "Boost functional fitness", bg: "url('src/assets/crossfit-bg.png')"},
  { title: "Pilates", description: "Boost functional fitness", bg: "url('src/assets/pilates-bg.png')"},
  { title: "CrossFit", description: "Boost functional fitness", bg: "url('src/assets/crossfit-bg.png')"}
];

export default function Workout(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [isExpanded, setisExpanded] = useState(false);

  const toggleExpand = () => {
    setisExpanded((prev) => !prev)
  };

  return (
    <section id="workouts" className="h-screen w-full -z-30 bg-black/90" data-aos="zoom-in">
      {/* <img
        src="src/assets/workouts-bg.png"
        alt="two pwople workout using ropes"
        className="absolute top-auto left-auto w-full h-full object-cover"
      /> */}
      <main className="relative app-container max-w-screen-md mx-auto h-full px-8 flex justify-center items-center m-0">
      <div
        className={`main-card ${isExpanded ? "expanded" : ""}`}
        onClick={toggleExpand}
      >
        <h1 className="main-title text-2xl transition-opacity duration-100 ease-in">Explore Workouts</h1>

        {/* Grid Items (Revealed when Expanded) */}
        {isExpanded && (
          <div className="grid-container grid grid-cols-3 gap-4 h-full w-full">
            {workoutItems.map((item, index) => (
              <div key={index} className="grid-item bg-black text-white pt-10 text-center rounded-xl shadow-md transition-all duration-300 ease-in hover:scale-105"
              style={{
                backgroundImage: item.bg,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              >
                <div className="text-3xl font-semibold"> {item.title}</div>
                {/* <div className="pt-10 font-semibold">{item.description}</div> */}
               
                
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      {/* <button
        className="show-more-btn"
        onClick={() => (window.location.href = "/pricing")}
      >
        Show More
      </button> */}
      <ArrowButton href="#trainers"/>
    </section>
  );
}

