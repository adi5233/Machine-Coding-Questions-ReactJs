import React, { useState, useRef, useEffect } from "react";

const otpLength = 4;

const Otp = () => {
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleChange = (index, value, e) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp([...newOtp]);
    if (value !== "" && index !== otpLength - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const onSubmit = () => {
    console.log("otp submitted suscessfully");
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRef.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };

  return (
    <div className="flex gap-3 bg-slate-400 p-10">
      {otp.map((digit, index) => (
        <div key={index}>
          <input
            key={index}
            value={digit}
            className=" w-8 p-2"
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value, e)}
            ref={(input) => {
              inputRef.current[index] = input;
            }}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
      <button className="bg-green-400 p-2 text-white">SUBMIT</button>
    </div>
  );
};

export default Otp;
