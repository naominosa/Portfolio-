import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Alfred from './assets/alfred.png'; // Your cartoon image

// Blinking eye component with tracking
const Eye = ({ style }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set up random blinking with slower timing
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 300); // Duration of blink increased from 200ms to 350ms
    }, Math.random() * 4000 + 6000); // Random interval between 6-10 seconds
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);
  
  // Constrain pupil inside eye
  const getPupilOffset = () => {
    const dx = mousePos.x - (style.left + 25); // 25 is half eye width
    const dy = mousePos.y - (style.top + 15);  // 15 is half eye height
    const angle = Math.atan2(dy, dx);
    const radius = 5; // how far pupil can move
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };
  
  const pupil = getPupilOffset();
  
  return (
    <div style={{ position: 'absolute', ...style, width: 50, height: 30 }}>
      <svg width="50" height="30">
        {isBlinking ? (
          // Closed eye (just a line when blinking)
          <motion.path 
            d="M 5 15 Q 25 25, 45 15" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
          />
        ) : (
          // Open eye
          <>
            <ellipse cx="20" cy="15" rx="16" ry="8" fill="white" stroke="black" strokeWidth="2" />
            <motion.circle
              cx={25 + pupil.x}
              cy={15 + pupil.y}
              r="5"
              fill="black"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

const AnimatedImage = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Breathing animation variants
  const breathingAnimation = {
    breatheIn: {
      scale: 1.03,
      y: -5,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    },
    breatheOut: {
      scale: 1,
      y: 0,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };
  
  // Hover animation variants
  const hoverAnimation = {
    hover: { 
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    },
    normal: { 
      scale: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <div style={{ position: 'relative', width: '300px', height: 'auto' }}>
      {!hasEntered && (
        <motion.img
          src={Alfred}
          alt="Cartoon"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
          onAnimationComplete={() => setHasEntered(true)}
          style={{
            width: '300px',
            height: 'auto',
            transform: 'scaleX(-1)', // Flip during animation
            position: 'absolute',
          }}
        />
      )}
      
      {hasEntered && (
        <div style={{ position: 'relative' }}>
          <motion.div
            animate={isHovered ? "hover" : "normal"}
            variants={hoverAnimation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={[
                'breatheIn', 'breatheOut'
              ]}
              variants={breathingAnimation}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <motion.img
                src={Alfred}
                alt="Cartoon"
                style={{
                  width: '300px',
                  height: 'auto',
                }}
              />
              {/* 👁 Left Eye */}
              <Eye style={{ top: 98, left: 112 }} /> {/* Adjust these positions to match your image */}
              {/* 👁 Right Eye */}
              <Eye style={{ top: 98, left: 170 }} /> {/* Adjust as needed */}

      
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;