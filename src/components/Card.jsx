// src/components/Card.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const images = [
  '/awsLogo.png',
  '/dockerLogo.jpeg',
  '/k8sLogo.webp',
  '/Azure.webp',
];

const Card = () => (
  <div className="relative h-[500px] overflow-hidden">
    {/* Background Marquee */}
    <div
      className="absolute inset-0 z-0"
      style={{
        transform: 'rotate(-10deg) scale(1.5)',
        transformOrigin: 'center center',
      }}
    >
      <Marquee
        direction="down"
        speed={50}
        gradient={false}
        pauseOnHover={false}
        style={{ height: '100%', width: '100%' }}
      >
        <div className="flex flex-col gap-8 items-center">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`bg-${idx}`}
              className="w-[150px] h-[150px] object-cover opacity-30"
            />
          ))}
        </div>
      </Marquee>
    </div>

   
  </div>
);

export default Card;
