import React, { useRef, useEffect, useState } from "react";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
