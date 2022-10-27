import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import LeftSideDropdown from "./LeftSideDropdown";

const Copy = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="min-h-screen relative">
      <span className="absolute text-4xl top-5 left-4 cursor-pointer">
        {/* <i className="bi bi-filter-left px-2 bg-gray-100 rounded-md"></i> */}
        <AiFillCloseCircle
          className="absolute text-4xl top-5 left-8 cursor-pointer text-gray-600 h-12 w-12"
          onClick={() => setOpen(!open)}
        />
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-100 shadow h-screen ${
      open ? "left-[-300px]" : "left-0"
    }`}
      >
        {/* SideBar Head  */}
        <div className="text-gray-500 bg-teal-500 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
            <h1 className="text-[15px]  ml-3 text-xl text-gray-900 font-bold">
              Tailwindbar
            </h1>
            {/* <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i> */}
            <AiFillCloseCircle
              className="ml-28 cursor-pointer text-gray-600 h-8 w-8"
              onClick={() => setOpen(!open)}
            />
          </div>
          <hr className="my-2 text-gray-600" />
        </div>
        {/* SideBar Head end */}
      <div>
        <LeftSideDropdown/>
      </div>
      </div>
    </div>
  );
};

export default Copy;
