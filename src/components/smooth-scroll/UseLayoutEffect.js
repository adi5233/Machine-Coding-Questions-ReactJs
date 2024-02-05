import React, { useRef, useLayoutEffect } from "react";

export const SmoothScrolling = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    // Animate the element's opacity on mount
    element.style.opacity = 0;
    console.log("before st");

    setTimeout(() => {
      element.style.opacity = 1;
    }, 1000);
    console.log("after st");
    return () => {
      // Clean up animation when the component unmounts
      element.style.opacity = 0;
    };
  }, []);

  return <div ref={elementRef}>{console.log("render")}Animate me!</div>;
};
