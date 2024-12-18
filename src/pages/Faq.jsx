import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
import ArrowButton from "../components/ArrowButton";

const HighlightText = ({ text, className }) => (
    <span className={className}>{text}</span>
  );

const questions = [
    {question: "What are the gym’s operating hours?", answer: (<span>Our gym is open{" "}<HighlightText text="24/7" className="font-semibold" /> for premium members. For basic members, we operate from{" "} <HighlightText text="6 AM to 10 PM" className="font-semibold" /> every day.</span>)},
    {question: "Do you offer personal training services?", answer: (<span>Yes, we provide personal training services with certified trainers. You can opt for customized workout plans and one-on-one sessions by choosing our{" "}<HighlightText text="Pro-Fit+ Plan" className="font-semibold" />.</span>)},
    {question: "Are group classes included in the membership?", answer: (<span>Yes, group classes like{" "}<HighlightText text="Yoga, HIIT, and CrossFit" className="font-semibold" />{" "}are included in our Premium Plan.</span>)},
    {question: "What safety measures do you follow?", answer: (<span>We prioritize your safety with regular equipment sanitization, contactless check-ins, and trained staff to ensure a safe workout environment.</span>)},
    {question: "Can I freeze or cancel my membership?", answer: (<span>Yes, you can freeze or cancel your membership at any time. Freezing is allowed for up to{" "}<HighlightText text="3 months" className="font-semibold" />. Reach out to our support team for assistance.</span>)},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Faq() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="faq" className="h-fit w-full -z-50 pb-28 text-white bg-black/90" data-aos="zoom-in">
      <h2 className="mx-0 pt-12 pb-7 text-center text-4xl">Frequently Asked Questions</h2>
      <div className="faq-container max-w-2xl my-0 mx-auto">
        {questions.map((q, qIndex) => (
            <div key={qIndex} className={classNames(
                'bg-transparent border border-white rounded-xl my-5 mx-0 p-7 relative overflow-hidden transition-all duration-300 ease-in',
                activeIndex === qIndex ? ' bg-white text-black shadow-md block': ''
            )}>
            <h3 className="faq-title my-0 mr-7 text-xl">{q.question}</h3>
  
            <p className={classNames("faq-text", activeIndex === qIndex ? "block" : "hidden", "m-0 mt-3 pt-3 border-t-4")}>
              {q.answer}
            </p>
  
            <button className="faq-toggle bg-transparent border-0 rounded-full cursor-pointer flex items-center justify-center text-lg p-0 absolute top-7 right-7 h-7 w-7 focus:outline-0"
            onClick={() => handleToggle(qIndex)}>
                {/* Chevron icon for closed state */}
                {activeIndex === qIndex ? (<XMarkIcon className="fa-times h-6 w-6 text-black"/>) : (<ChevronDownIcon className="h-6 w-6 text-white" />)}
            </button>
          </div>
        ))}
        
      </div>
      <ArrowButton href="#contact"/>
    </section>
  );
}
