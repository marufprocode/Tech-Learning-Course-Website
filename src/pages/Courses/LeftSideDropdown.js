import React from "react";
import { Link } from "react-router-dom";

const LeftSideDropdown = () => {
  return (
    <div className="dropdown w-full min-w-fit relative dropdown-hover hover:mb-[285px]">
      <label tabIndex={0} className="btn rounded-none m-1 w-full">
        Course Item
      </label>
      <div
        tabIndex={0}
        className="dropdown-content absolute top-14 flex menu p-2 shadow ml-1 w-full bg-slate-200 min-h-[280px]"
      >
        <h2 className="font-lobstar text-lg">
        The Complete React Native + Hooks Course
        </h2>
        <p><span className="font-semibold">Instructor:</span> Md: Abdullah</p>        
        <p><span className="font-semibold">Course Duration:</span> 6 Months</p>        
        <p><span className="font-semibold">Total Class:</span> 112</p>        
        <p><span className="font-semibold">Updated On:</span> 25 Sep, 2022</p>
        <Link to="/course-detail" className="flex left-0 px-2 absolute w-full bottom-2">
          <button className="btn btn-info w-full rounded-none mt-3 hover:bg-sky-500">View Details</button>  
        </Link>        
      </div>
    </div>
  );
};

export default LeftSideDropdown;
