import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowButton from "../components/ArrowButton";

const trainers = [
  { id: 1, name: "Arnold Schwarzenegger", designation: "Strength Trainer", image: "trainer-1.png", link: "/trainer1" },
  { id: 2, name: "Dwayne Johnson", designation: "Cardio Specialist", image: "trainer-2.png", link: "/trainer2" },
  { id: 3, name: "Abu Salim", designation: "Personal Trainer", image: "trainer-3.png", link: "/trainer3" },
  { id: 4, name: "Sanjana George", designation: "Crossfit Trainer", image: "trainer-4.png", link: "/trainer4" },
];

export default function Trainers() {
    // const navigate = useNavigate();

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

    return (
    <section
      id="trainers"
      className="h-screen w-full py-12 -z-40 bg-black/90"
      data-aos="zoom-in">
      <header className="text-white relative flex flex-col max-w-screen-sm text-center mx-auto">
        <h2 className=" text-6xl font-semibold mb-4">
          Meet our expert trainers
        </h2>
        <p className="mb-8">
          Guiding You Every Step of the Way Toward Your Fitness Goals. Our
          certified and experienced trainers are here to design personalized
          programs, motivate you, and ensure you achieve the results you desire.
        </p>
      </header>

      <div className="w-full relative overflow-hidden">
        <div className="carousel-track flex items-center">
            {trainers.map((trainer) => (
                <div 
                key={trainer.id}
                className="carousel-item min-w-[300px] h-[300px] mx-4 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate(trainer.link)}>
                    <img 
                      src={`./assets/${trainer.image}`} 
                      alt={trainer.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg" />
                      {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                      <p className="text-sm">{trainer.designation}</p>
                    </div>
                </div>
            ))}

            {/* Duplicate items for seamless looping */}
            {trainers.map((trainer) => (
                <div 
                key={trainer.id}
                className="carousel-item min-w-[300px] h-[300px] mx-4 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate(trainer.link)}>
                    <img 
                      src={`./assets/${trainer.image}`} 
                      alt={trainer.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg" />
                      {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                      <p className="text-sm">{trainer.designation}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <ArrowButton href="#pricing"/>
    </section>
  );
}
