import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import heroLottie from "../../Assets/Lottie/90714-online-learning.json";
import animationlottie from '../../Assets/Lottie/69164-marketing.json'


const Home = () => {
    return (
        <div className='min-h-screen'>
            {/* ....................Hero Section Start...................... */}
            <section className="bg-themeLightBg dark:bg-gray-800 dark:text-white text-gray-800 min-h-screen">
	            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-between">
		            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative">
                    <Lottie animationData={heroLottie} loop={true} className="w-full h-full"/>;
                    <Lottie animationData={animationlottie} loop={true} className="absolute w-[200px] h-[200px] left-[183px] top-[138px] sm:left-[240px] sm:top-[217px]"/>;
		            </div>
		            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			        <h1 className="text-3xl lg:text-5xl font-bold leading-none sm:text-6xl">A Large Platform to get skilled
			        </h1>
                    <h3 className="text-lg font-bold mt-2 text-teal-600">Our course is rated excellent by over 2,000 people</h3>
			        <p className="mt-6 mb-8 text-lg sm:mb-12">Today, more than 10,000 people have already joined in our different courses: programming, Machine Learning and Artificial Intelligence. Explore our outstanding courses and get started to be a hero.
			        </p>
			    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to="/courses" className="px-8 py-3 text-lg font-semibold rounded bg-purple-400 hover:bg-purple-500 text-gray-900">Explore Courses</Link>
			    </div>
		            </div>
	            </div>
            </section>
            {/* ....................Hero Section End...................... */}

        </div>
    );
};

export default Home;