import { useEffect, useRef } from "react";

function useFadeInOnScroll(options) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return ref;
}
