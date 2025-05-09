import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cartoon from './assets/Photoroom.png'; // Your cartoon image
import './animatedImage.css'; // Import the CSS file

const AnimatedImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300); // Blink duration
    }, Math.random() * 4000 + 6000); // Random interval: 6-10 seconds

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  // Pupil movement logic
  const getPupilOffset = (eyeRef) => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const rect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = mousePos.x - eyeCenterX;
    const dy = mousePos.y - eyeCenterY;
    const angle = Math.atan2(dy, dx);
    const radius = 5; // how far pupil can move
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const leftPupil = getPupilOffset(leftEyeRef);
  const rightPupil = getPupilOffset(rightEyeRef);

  return (
    <div className="animated-image-container">
      <motion.div
        animate={isHovered ? 'hover' : 'normal'}
        variants={{
          hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
          normal: { scale: 1, y: 0, transition: { duration: 0.3 } },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={['breatheIn', 'breatheOut']}
          variants={{
            breatheIn: {
              scale: 1.03,
              y: -5,
              transition: { duration: 2, ease: 'easeInOut' },
            },
            breatheOut: {
              scale: 1,
              y: 0,
              transition: { duration: 2, ease: 'easeInOut' },
            },
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {/* Cartoon Image */}
          <motion.img
            src={cartoon}
            alt="Cartoon"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 0.8,
            }}
            className="animated-image"
          />
          {/* Left Eye */}
          <div ref={leftEyeRef} className="eye-container left-eye">
            <svg className="eye" width="50" height="30">
              {isBlinking ? (
                <motion.path
                  d="M5 15 Q25 25, 45 15"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
              ) : (
                <>
                  <path
                    d="M0,20 Q25,0 50,20 Q25,40 0,20"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx={25 + leftPupil.x}
                    cy={20 + leftPupil.y}
                    r="7"
                    fill="black"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </>
              )}
            </svg>
          </div>
          {/* Right Eye */}
          <div ref={rightEyeRef} className="eye-container right-eye">
            <svg className="eye" width="50" height="30">
              {isBlinking ? (
                <motion.path
                  d="M5 15 Q25 25, 45 15"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
              ) : (
                <>
                  <path
                    d="M0,20 Q25,0 50,20 Q25,40 0,20"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx={25 + rightPupil.x}
                    cy={20 + rightPupil.y}
                    r="7"
                    fill="black"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </>
              )}
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedImage;


