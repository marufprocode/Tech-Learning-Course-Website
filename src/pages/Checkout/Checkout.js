import React, { useEffect } from 'react';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Link, useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='min-h-screen w-[100%]'>
            <Confetti
        className='w-full h-screen'
        recycle={false}
        />
        <div className='flex flex-col h-full w-[100%] justify-center items-center'>
        <h1 className='text-3xl px:5 md:px-24 font-bold text-center my-20'>Congratulations! You have got the premium access of this course, let's start practice</h1>
            <div className='w-full max-w-[800px] flex shadow-xl'>
                <div className='w-[50%] p-8'>
                    <h3 className='text-3xl font-bold'>{course?.name}</h3>
                    <h3 className='font-ubuntu mt-5'>{course?.shortdes}</h3>
                    <Link to="/courses"><button className='btn btn-info w-full mt-5'>Start Practice</button></Link>
                </div>
                <div className='w-[50%]'>
                    <img src={course?.img} alt="courseImage" className='h-full' />
                </div>
            </div>
        </div>
        </div>
    )
};

export default Checkout;