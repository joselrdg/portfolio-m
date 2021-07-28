import React, { useEffect, useState } from 'react'

const useOnScreen = (ref = <div />, rootMargin = "40px", threshold = 1) => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setTimeout(() => setIntersecting(entry.isIntersecting), 0);
          // setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
          threshold,
        }
      );
      const re = ref.current;
      if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
            if (re) {
          observer.unobserve(re);
        }
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
  };

  export default useOnScreen;