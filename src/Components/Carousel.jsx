import React from 'react';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/imh11.png';
import img12 from '../assets/img12.png';

const Carousel = () => {
  const logos = [
    { name: 'iTranslate', class: 'w-32', img: img7 },
    { name: 'Arise', class: 'w-32', img: img8 },
    { name: 'Wargaming.net', class: 'w-32', img: img9 },
    { name: 'Meister', class: 'w-32', img: img10 },
    { name: 'MixVibes', class: 'w-32', img: img11 },
    { name: 'WhatWapp', class: 'w-32', img: img12 },
    { name: 'Kolibri', class: 'w-32', img: img7 }, // Example: Reuse img7 for Kolibri
  ];

  return (
    <div className="w-full mt-[-85px] bg-white overflow-hidden py-4">
      <div className="relative">
        {/* First row of logos */}
        <div className="flex animate-scroll space-x-12 md:space-x-16 lg:space-x-24">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center flex-shrink-0 ${logo.class}`}
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
