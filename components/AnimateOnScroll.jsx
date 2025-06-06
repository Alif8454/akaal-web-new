// components/AnimateOnScroll.jsx
"use client";

import { useEffect } from 'react';

const AnimateOnScroll = () => {
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const animationType = element.dataset.animate;
            const delay = element.dataset.animateDelay || '0';
            
            // Apply animation with delay
            setTimeout(() => {
              element.classList.add(`animate-${animationType}`);
              observer.unobserve(element);
            }, parseInt(delay));
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default AnimateOnScroll;