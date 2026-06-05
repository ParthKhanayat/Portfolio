import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [takeoff, setTakeoff] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start takeoff animation after 2 seconds
    const takeoffTimer = setTimeout(() => {
      setTakeoff(true);
    }, 2000);

    // Fade out the whole loader 0.5s after takeoff starts
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Completely remove loader and show app content after 3.3 seconds
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3300);

    return () => {
      clearTimeout(takeoffTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`rocket-wrapper ${takeoff ? 'takeoff' : ''}`}>
        <Rocket size={64} className="rocket-icon" />
        <div className="fire"></div>
      </div>
      <div className="loading-text">
        {takeoff ? 'Liftoff...' : 'Preparing Systems...'}
      </div>
    </div>
  );
};

export default Loader;
