"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section5() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <br /><br />
      <div className="w-full lg:relative lg:top-25 overflow-hidden h-[600px]" data-aos="fade-up">
        <div className="flex flex-col items-center space-y-6 px-4">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-2" data-aos="fade-down">
            <hr className="flex-1 border-t border-green-700 w-12" />
            <h2 className="text-xs sm:text-sm md:text-base font-bold text-green-700 tracking-wide whitespace-nowrap">
              OUR CERTIFICATION
            </h2> 
            <hr className="flex-1 border-t border-green-700 w-12" />
          </div>
          <br />
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
            Quality <span className="text-green-700">Certifications</span> & Standards
          </h1>
          <br />
          <h5 className="text-center text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="400">
            Our commitment to excellence is backed by international certifications and quality
            standards, ensuring the highest level of product quality and safety.
          </h5>
          <br /><br />
          {/* Certification Images in Single Row */}
          <div className="flex flex-wrap justify-evenly gap-6 w-full">
            <img 
              src="/cer1.png" 
              alt="Certification 1" 
              className="h-22 w-40 object-contain transition-all duration-500 hover:scale-115 hover:cursor-pointer border-2 hover:border-gray-300 border-transparent"
              data-aos="zoom-in" data-aos-delay="100"
            />
            <img 
              src="/cer2.png" 
              alt="Certification 2" 
              className="h-22 w-40 object-contain transition-all duration-500 hover:scale-115 hover:cursor-pointer border-2 hover:border-gray-300 border-transparent"
              data-aos="zoom-in" data-aos-delay="200"
            />
            <img 
              src="/cer3.png" 
              alt="Certification 3" 
              className="h-22 w-40 object-contain transition-all duration-500 hover:scale-115 hover:cursor-pointer border-2 hover:border-gray-300 border-transparent"
              data-aos="zoom-in" data-aos-delay="300"
            />
            <img 
              src="/cer4.png" 
              alt="Certification 4" 
              className="h-22 w-40 object-contain transition-all duration-500 hover:scale-115 hover:cursor-pointer border-2 hover:border-gray-300 border-transparent"
              data-aos="zoom-in" data-aos-delay="400"
            />
            <img 
              src="/cer5.png" 
              alt="Certification 5" 
              className="h-22 w-40 object-contain transition-all duration-500 hover:scale-115 hover:cursor-pointer border-2 hover:border-gray-300 border-transparent"
              data-aos="zoom-in" data-aos-delay="500"
            />
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}