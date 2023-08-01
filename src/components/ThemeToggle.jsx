import React from "react";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const ThemeToggle = () => {
  return (
    <div className="flex justify-between mb-9 items-center">
      <h1 className="title text-veryLightGrayLT text-[2rem] lg:text-[3rem] tracking-[0.4em]">TODO</h1>
      <img src={sunIcon} alt="img" className='cursor-pointer'/>
    </div>
  );
};

export default ThemeToggle;
