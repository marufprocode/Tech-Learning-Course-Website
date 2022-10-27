import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const AllCourse = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default AllCourse;
