/*'use client'; // This is a client-side component

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';  // Import the CSS module for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event to show/hide the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <svg className={styles.scrollTopInner} viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default ScrollToTop;*/
'use client'; // This is a client-side component

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';  // Import the CSS module for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle the scroll event to show/hide the scroll-to-top button and calculate progress
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / documentHeight) * 100;

    if (scrollPosition > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setScrollProgress(progress); // Set scroll progress for circle filling effect
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <svg className={styles.scrollTopInner} viewBox="0 0 100 100">
        <circle
          className={styles.circleBackground}
          cx="50"
          cy="50"
          r="48"
        />
        <circle
          className={styles.circleForeground}
          cx="50"
          cy="50"
          r="48"
          style={{ strokeDashoffset: `${(100 - scrollProgress) * (Math.PI * 2 * 48) / 100}` }}
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
