import React from "react";

const Filter = ({ className }) => {
  return (
    <div className={className}>
           {" "}
        <p>All</p>
        <p className="ml-6">Active</p>
        <p className="ml-6">Completed</p>
  
    </div>
  );
};

export default Filter;
