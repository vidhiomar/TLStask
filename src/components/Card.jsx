import React from 'react';
import Marquee from 'react-fast-marquee';

const images = [
    '/awsLogo.png',
    '/dockerLogo.jpeg',
    '/k8sLogo.webp',
    '/Azure.webp',

];

const Card = () => {
  return (
    <div style={{ height: '500px', overflow: 'hidden' }}>
      <Marquee
        direction="down"
        speed={50}
        gradient={false}
        pauseOnHover={true}
        style={{ height: '100%' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          ))}
        </div>
      </Marquee>
      
    </div>
    
  );
};

export default Card;
