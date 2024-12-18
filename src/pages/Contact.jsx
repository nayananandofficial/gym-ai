import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="contact" className="h-screen w-full bg-black/90 text-white" data-aos="zoom-in">
      <div className="py-3 lg:py-6 px-4 max-w-screen-md mx-auto">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Get in Touch
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        We'd love to hear from you! Fill out the form or reach us directly using the contact information.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left column */}
      <form action="#" className="flex-auto space-y-8 mx-12">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input type="email" id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gymfluencer.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea id="message" rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black bg-white/70 hover:scale-105 ease-in-out rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Send message
          </button>
        </form>
        {/* right column */}
        <div className="flex flex-col justify-center items-center text-center space-y-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold">Our Address</h3>
              <p className="mt-2 text-gray-400">123 Fitness Lane, Gym City, Haryana</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="mt-2 text-gray-400">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="mt-2 text-gray-400">support@gymfluencer.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white hover:scale-110">
              <FontAwesomeIcon icon={faXTwitter} className="text-white h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 h-6 w-6" />
              </a>
            </div>
          </div>
      </div>
      
    </section>
  );
}