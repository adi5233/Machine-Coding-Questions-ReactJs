import { useEffect, useState } from "react";

const MIN = 0,
  MAX = 100;

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progressBar">
      <span
        style={{
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default ProgressBar;
