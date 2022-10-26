import React from "react";
import { IoMdTimer } from 'react-icons/io';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="w-full max-w-[300px] bg-base-100 shadow-xl shadow-emerald-200 relative">
        <div className="shade w-full h-full bg-[#00000099] absolute hidden">
            <button className=" absolute top-[50%] left-[25%] z-50 btn btn-primary">View Details</button>
        </div>
      <figure className="relative">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="icon" className="w-[40px] absolute left-[10px] bottom-0"/>
        <small className="ml-14 font-ubuntu">Instructor: Md. Abdullah</small>
      </figure>
      <div className="card-body px-5 py-3">
        <h2 className="card-title font-lobstar">
        The Complete React Native + Hooks Course
        </h2>
        <p className="text-sm font-ubuntu">Understand React Native with Hooks, Context, and React Navigation.</p>
        <div className="flex font-ubuntu justify-between">
            <small className="flex items-center"><IoMdTimer className="w-4 h-4 mr-2"/> 6 Months</small>
            <div className="flex">
                <BsStarFill className="text-orange-300 mr-1"/>
                <BsStarFill className="text-orange-300 mr-1"/>
                <BsStarFill className="text-orange-300 mr-1"/>
                <BsStarFill className="text-orange-300 mr-1"/>
                <BsStarHalf className="text-orange-300 mr-1"/>
            </div>
        </div>
        <Link to="/course-detail" className="card-actions">
          <button className="btn w-full btn-info">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
