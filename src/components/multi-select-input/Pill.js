import React from "react";

const Pill = ({ key, text, image, onclick }) => {
  return (
    <span
      key={key}
      onClick={onclick}
      className="rounded-full text-center align-middle mr-2 mb-2"
    >
      <span className="rounded-full inline-block bg-slate-400  px-6 text-center p-2 cursor-pointer gap-4 flex">
        <img src={image} alt="userimage" className="w-4" />
        <h2 className="whitespace-no-wrap">{text}</h2>X
      </span>
    </span>
  );
};

export default Pill;
