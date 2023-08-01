import React from "react";
import bgImageDark from "../assets/images/bg-desktop-dark.jpg";
import bgImageLight from "../assets/images/bg-desktop-light.jpg";

const Header = () => {
  return (
    <header>
      <img src={bgImageLight} alt="img" className="w-[100vw] h-72" />
    </header>
  );
};

export default Header;
