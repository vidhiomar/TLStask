// src/components/PhotoGrid.jsx
import React from 'react';

export default function PhotoGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] pt-10">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto block"
        />
      ))}
    </div>
  );
}
