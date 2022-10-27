import React from "react";
import { Link } from "react-router-dom";

const LeftSideDropdown = ({course}) => {
  return (
    <div className="dropdown w-full min-w-fit relative dropdown-hover hover:mb-[285px]">
      <label tabIndex={0} className="btn rounded-none bg-teal-200 text-black hover:bg-teal-300 border-none m-1 w-full h-[75px]">
        <div className="flex text-left p-0">
        <img src={course?.icon} alt="courseIcon" className="w-5 mr-3 inline"/>
        <p>{course?.name}</p>
        </div>
      </label>
      <div
        tabIndex={0}
        className="dropdown-content absolute bg-teal-300 top-20 flex menu p-2 shadow ml-1 w-full min-h-[280px]"
      >
        <h2 className="font-lobstar text-lg">
        {course?.name}
        </h2>
        <p><span className="font-semibold">Instructor:</span> {course?.Instructor}</p>        
        <p><span className="font-semibold">Course Duration:</span> {course?.duration}</p>        
        <p><span className="font-semibold">Video Duration:</span> {course?.totalhour}</p>        
        <p><span className="font-semibold">Updated On:</span> 26 Sep, 2022</p>
        <Link to={`/courses/${parseInt(course?.id)}`} className="flex left-0 px-2 absolute w-full bottom-2">
          <button className="btn btn-outline w-full rounded-none mt-3 hover:bg-teal-500">View Details</button>  
        </Link>        
      </div>
    </div>
  );
};

export default LeftSideDropdown;
