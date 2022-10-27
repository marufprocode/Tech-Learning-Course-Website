import React from "react";
import { IoMdTimer } from "react-icons/io";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="w-full max-w-[400px] bg-base-100 shadow-xl dark:shadow-md dark:shadow-white shadow-emerald-200 relative">
      <figure className="relative dark:bg-slate-700 dark:text-white">
        <img src={course?.img} alt="CardImage" className="h-[180px] w-full" />
        <img
          src={course?.icon}
          alt="icon"
          className="w-[40px] absolute left-[10px] bottom-0"
        />
        <small className="ml-14 font-ubuntu">
          <span className="font-bold">Instructor:</span> {course?.Instructor}
        </small>
      </figure>
      <div className="px-5 py-3 flex flex-col justify-between dark:bg-slate-700 dark:text-white h-[300px]">
        {/* body content  */}
        <div>
        <h2 className="card-title font-poppins">{course?.name}</h2>
        <p className="text-sm font-ubuntu">{course?.shortdes}</p>
        </div>
        {/* Card Footer  */}
        <div className="">
          <div className="flex font-ubuntu justify-between">
            <small className="flex items-center">
              <IoMdTimer className="w-4 h-4 mr-2" /> {course?.duration}
            </small>
            <div className="flex">
              <BsStarFill className="text-orange-300 mr-1" />
              <BsStarFill className="text-orange-300 mr-1" />
              <BsStarFill className="text-orange-300 mr-1" />
              <BsStarFill className="text-orange-300 mr-1" />
              <BsStarHalf className="text-orange-300 mr-1" />
            </div>
          </div>
          <Link to={`/courses/${course.id}`} className="card-actions">
            <button className="btn w-full btn-info my-5 hover:bg-sky-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
