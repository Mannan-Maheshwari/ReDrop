import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function PageTransition({ children }) {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate in
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 30,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    // Cleanup on unmount
    return () => {
      gsap.to(container, {
        opacity: 0,
        y: -20,
        scale: 0.98,
        duration: 0.4,
        ease: "power2.in",
      });
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}


