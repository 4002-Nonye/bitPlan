import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full absolute top-[4rem] ">
      <div className="w-[75%] md:w-[55%] lg:w-[33%]"> {children}</div>
    </main>
  );
};

export default Main;
