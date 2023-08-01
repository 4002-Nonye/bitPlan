import React, { useState ,useEffect} from "react";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  //LIGHT AND DARK MODE

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    //first time loading application, if no theme in localStorage, set default to light
    return savedTheme ? savedTheme : "light";
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const [isSun, setImageToggle] = useState(true);
  return (
    <div className="flex justify-between mb-9 items-center">
      <h1 className="title text-veryLightGrayLT text-[2rem] lg:text-[3rem] tracking-[0.4em]">
        TODO
      </h1>
      <img
        src={theme === "light" ? sunIcon : moonIcon}
        alt="img"
        className="cursor-pointer"
        onClick={() => handleTheme()}
      />
    </div>
  );
};

export default ThemeToggle;
