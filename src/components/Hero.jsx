// src/components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Typewriter from './Typewriter';
import './Hero.css';
import Card from './Card';

export default function Hero() {
  const marqueeImages = [
    '/oneImg.jpg',
    '/twoImg.jpeg',
    '/threeImg.jpg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  ];
  const gridImages = Array(9).fill(
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  );

  const renderMarquee = (direction, keyPrefix) => {
    const cls = direction === 'ltr' ? 'marquee' : 'marquee-reverse';
    return (
      <div className="overflow-hidden mt-[5px]" key={keyPrefix}>
        <div className={`inline-flex gap-[5px] whitespace-nowrap ${cls}`}>
          {marqueeImages.concat(marqueeImages).map((src, i) => (
            <img
              key={`${keyPrefix}-${i}`}
              src={src}
              alt={`${keyPrefix}-${i}`}
              className="w-1/3 h-24 object-cover"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="min-h-screen bg-[#070054] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 mt-12">
            <Typewriter
              text="Trransform Your Tech Career with Expert Training"
              speed={100}
            />
            <p className="text-lg md:text-xl text-gray-300">
              Comprehensive training programs designed to help you master modern technologies and launch your career in tech.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#070054] px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#d9d9d9] transition-colors">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#070054] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <Card/>
        </div>
      </div>
    </section>
  );
}
