import { CheckIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowButton from "../components/ArrowButton";

const tiers = [
  {
    name: 'Beginners',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29/month',
    description: "Target: Beginners and those who need flexibility for a basic fitness routine.",
    features: ['Access to gym facilities', 'Unlimited cardio and weight training sessions', 'Free locker and shower access', 'Open 6 AM to 10 PM'],
    featured: false,
  },
  {
    name: 'Pro-Fit+',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$49/month',
    description: 'Target: Fitness enthusiasts who want personalized support and premium benefits.',
    features: [
      'Access to all gym facilities',
      'Personal trainer sessions (2 per month)',
      'Access to group classes (Yoga, HIIT, CrossFit)',
      'Nutrition consultation once a month',
      'Open 24/7 with priority access to equipment',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {

        useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);

  return (
    <section id='pricing' className='h-fit w-full py-12 -z-40 bg-black/90' data-aos="zoom-in">
        <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Flexible Plans for Your Fitness Journey
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
      Choose a membership that works for you and take the first step toward achieving your fitness goals!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 ">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-600 shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-sm'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-yellow-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-white' : 'text-black', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-700 ... text-white shadow-sm hover:scale-105 '
                  : 'text-white bg-gradient-to-r from-indigo-300 to-indigo-700 ... hover:scale-105 ease-in',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
      <ArrowButton href="#faq"/>
    </div>
    </section>
    
  )
}
