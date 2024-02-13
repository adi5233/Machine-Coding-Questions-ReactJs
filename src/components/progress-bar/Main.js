import React, { useEffect, useState } from "react";
import "./Main.css";
import ProgressBar from "./ProgressBar";

const Main = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="progressBarContainer">
      <div className="heading">Progress Bar</div>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
};

export default Main;
