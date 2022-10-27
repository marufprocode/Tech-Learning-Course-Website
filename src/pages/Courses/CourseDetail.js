import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import brandImg from "../../Assets/Brands/LogoPrimary.png"
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const CourseDetail = () => {
    const courseData = useLoaderData();
  return (
    <div className="bg-gray-200 dark:bg-slate-800">
      <div className="bg-gray-100 dark:bg-slate-700 dark:text-white py-10 mx-5 md:mx-14 px-1 lg:p-14">
        <div className="mx-auto container w-full flex items-center lg:flex-row flex-col justify-between px-6 lg:px-0 relative pt-10" ref={ref}>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="flex items-center btn btn-warning absolute top-0 right-0" onClick={toPdf}>Download <FaFilePdf className="ml-2"/></button>}
      </Pdf>
            
          <div className="flex flex-col justify-start items-start lg:w-1/2 px-2 lg:px-5">
            <div>
              <img src={brandImg} alt="bandImg" className="w-1/2"/>
            </div>
            <div className="md:mt-3">
              <p className="text-gray-800  lg:text-4xl text-3xl font-extrabold leading-9">
                Course Title: {courseData?.name}
              </p>
            </div>
            <div className="md:mt-3">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {courseData?.shortdes}
              </p>
              <p>
                <span className="font-bold">Instructor: </span>
                <span>{courseData?.Instructor}</span>
              </p>
              <p>
                <span className="font-bold">Access: </span>
                <span>{courseData?.access}</span>
              </p>
              <p>
                <span className="font-bold">Certificate: </span>
                <span>{courseData?.certificate}</span>
              </p>
              <p>
                <span className="font-bold">Course Duration: </span>
                <span>{courseData?.duration}</span>
              </p>
            </div>
            <div className="my-8 gap-y-6">
              <div>
                <div className="text-gray-800 dark:text-gray-300 font-medium leading-none">
                    <h1 className="text-2xl font-lobstar underline">You Will Learn:</h1>
                  <ul>
                    {
                        courseData.you_learn.split('\\n').map((item, index)=>{
                            return(
                                <li key={index} className="text-base">
                                    {index+1}.{item}
                                    <br />
                                </li>
                            )
                        })
                    }
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 mt-10 md:mt-0">
            <img
              className="w-full"
              src={courseData.img}
              alt="laptops"
            />
          </div>
        </div>
        <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
          <div className="flex flex-col justify-start items-start xl:w-full">
          <div>
            <h2 className="text-gray-800 dark:text-gray-300  lg:text-3xl text-2xl font-bold leading-7 mb-3">
            Who this course is for:
              </h2>
              <ul className="text-gray-800 dark:text-gray-300 lg:text-base text-sm leading-normal">
                    {
                        courseData.for_whom.split('\\n').map((item, index)=>{
                            return(
                                <li key={index} className="text-base list-disc ml-5">
                                    {item}
                                    <br /> <br />
                                </li>
                            )
                        })
                    }
              </ul>
            </div>
          <div className="mb-8">
            <h2 className="text-gray-800 dark:text-gray-300 lg:text-3xl text-2xl font-bold leading-7 mb-3">
            Requirements
              </h2>
              <p className="text-gray-800 dark:text-gray-300 lg:text-base text-sm leading-normal">
                {courseData.requirements}
              </p>
            </div>
            <div>
              <h2 className="text-gray-800 dark:text-gray-300 lg:text-3xl text-2xl font-bold leading-7">
                The details
              </h2>
            </div>
            <div className="mt-8">
              <p className="text-gray-800 dark:text-gray-300 lg:text-base text-sm leading-normal">
                    {
                        courseData.details.split('\\n').map((item, index)=>{
                            return(
                                <span key={index} className="text-base">
                                    {item}
                                    <br /> <br />
                                </span>
                            )
                        })
                    }
              </p>
            </div>
            <Link to={`/checkout/${parseInt(courseData?.id)}`}><button className="btn btn-accent px-10">Get Premium Access of our Courses</button></Link>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default CourseDetail;
