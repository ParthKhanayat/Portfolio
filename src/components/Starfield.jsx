import React, { useEffect, useState } from 'react';
import './Starfield.css';

const Starfield = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars on mount
    const numStars = 200;
    const newStars = [];
    
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100, // percentage for left
        y: Math.random() * 100, // percentage for top
        size: Math.random() * 2 + 1, // 1px to 3px
        animationDuration: Math.random() * 3 + 2, // 2s to 5s
        animationDelay: Math.random() * 5, // 0s to 5s
      });
    }
    
    setStars(newStars);
  }, []);

  return (
    <div className="starfield-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
