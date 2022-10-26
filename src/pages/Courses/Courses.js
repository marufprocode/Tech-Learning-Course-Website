import React from 'react';
import CourseCard from './CourseCard';
import Drawer from './Drawer';
import LeftSideDropdown from './LeftSideDropdown';

const Courses = () => {
    return (
            <>
            <div className='absolute z-50 md:hidden'>
            <Drawer/>
            </div>
        <div className='2xl:container px-5 py-5 border mx-auto'>
            <div className='grid grid-cols-12 gap-2'>
                {/* Left Side Grid  */}
                <div className='hidden md:flex md:flex-col md:col-span-4 lg:col-span-3 border-2 p-5'>
                    <LeftSideDropdown/>
                    <LeftSideDropdown/>
                    <LeftSideDropdown/>
                    <LeftSideDropdown/>
                    <LeftSideDropdown/>
                    <LeftSideDropdown/>
                </div>
                {/* Right Side Grid  */}
                <div className='col-span-12 md:col-span-8 lg:col-span-9 border-2 p-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center'>
                        <CourseCard/>    
                        <CourseCard/>    
                        <CourseCard/>    
                        <CourseCard/>    
                        <CourseCard/>    
                        <CourseCard/>    
                    </div>                    
                </div>
            </div>
        </div>
            </>
    );
};

export default Courses;