"use client";

import { useState, useEffect } from "react";

export default function Section4() {
  const [yearsExp, setYearsExp] = useState(0);
  const [happyFarmers, setHappyFarmers] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [statesCovered, setStatesCovered] = useState(0);

  const targetValues = {
    years: 10,
    farmers: 1000,
    members: 10,
    states: 10,
  };

  const duration = 2000;

  useEffect(() => {
    let startTime = null;
    let hasAnimated = false;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setYearsExp(Math.floor(progress * targetValues.years));
      setHappyFarmers(Math.floor(progress * targetValues.farmers));
      setTeamMembers(Math.floor(progress * targetValues.members));
      setStatesCovered(Math.floor(progress * targetValues.states));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          requestAnimationFrame(animateCounters);
          hasAnimated = true;
        }
      },
      { threshold: 0.1 }
    );

    const countersSection = document.querySelector(".counter-number");
    if (countersSection) {
      observer.observe(countersSection);
    }

    return () => {
      if (countersSection) {
        observer.unobserve(countersSection);
      }
    };
  }, []);

  const counterData = [
    { value: yearsExp, label: "Years Experience" },
    { value: happyFarmers, label: "Happy Farmers" },
    { value: teamMembers, label: "Team Members" },
    { value: statesCovered, label: "States Covered" },
  ];

  return (
    <>
      <br /><br /><br />
      <div className="flex flex-col items-center overflow-hidden lg:flex-row justify-evenly gap-x-4 sm:gap-x-8 md:gap-x-10" data-aos="fade-up">
        {/* Image Section */}
        <img
          src="/about-agrolla.png"
          alt="About Agrolla"
          className="lg:w-[720px] lg:h-[536px] lg:relative lg:top-5"
          data-aos="zoom-in-right"
        />

        {/* Text + Counters */}
        <div className="lg:w-[680px] lg:h-[536px] w-full flex flex-col gap-4 sm:w-[700px]" data-aos="fade-left">
          <br />
          <div className="flex items-center justify-center space-x-3">
            <hr className="w-10 border border-[#2E7D32]" />
            <p className="text-xs sm:text-sm text-[#2E7D32] font-bold uppercase tracking-wider">
              &nbsp;Featured Products&nbsp;
            </p>
            <hr className="w-10 border border-[#2E7D32]" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] leading-snug">
            <span className="text-green-700">Agrolla Impex</span>: Nurturing
            Quality, Cultivating Trust
          </h1>
          <h5 className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed lg:w-[580px]">
            Agrolla Impex is a distinguished One Star Export House and a leading
            manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
            Headquartered in Gujarat, India, we take immense pride in our fully
            integrated operations, ensuring uncompromised quality, consistency,
            and reliability in every shipment.
          </h5>

          {/* Counters */}
          <div className="flex flex-wrap justify-between text-center gap-y-6">
            {counterData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-1/2 md:w-1/4"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl font-bold text-green-700 counter-number sm:text-3xl lg:text-4xl">
                  {item.value}+
                </div>
                <div className="text-xs font-semibold text-center text-gray-700 sm:text-sm md:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-green-700 h-[48px] w-[154px] hover:bg-green-700/80 text-white font-medium rounded"
              data-aos="fade-up"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
