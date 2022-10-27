import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import LeftSideDropdown from './LeftSideDropdown';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='2xl:container px-5 py-5 mx-auto dark:bg-gray-800'>
            <div className='grid grid-cols-12 gap-2'>
                {/* Left Side Grid  */}
                <div className='flex flex-wrap md:flex-col col-span-12 md:col-span-4 lg:col-span-3 p-5'>
                    {
                        courses?.map(course => <LeftSideDropdown key={course.id} course={course}/>)
                    }
                </div>
                {/* Right Side Grid  */}
                <div className='col-span-12 md:col-span-8 lg:col-span-9 p-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center'>
                        {
                            courses?.map(course => <CourseCard key={course.id} course={course}/>)
                        }    
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Courses;