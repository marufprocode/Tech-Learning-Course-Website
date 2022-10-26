import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center py-10 px-5 bg-gray-100">
        <div className="flex shadow-xl flex-col max-w-lg py-6 px-5 md:px-10  rounded-md bg-teal-100 text-gray-700 w-[700px]">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">
              Sign up to to get our outstanding services
            </p>
          </div>
          <form
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                    required
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                    required
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                    required
                  type="password"
                  name="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Confirm Password
                  </label>
                </div>
                <input
                    required
                  type="password"
                  name="confirmpass"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-700"
                />
              </div>
              {/* {signUpStatus && (
                <p className="text-green-500">User Created Succesfully</p>
              )}
              {signUpError && (
                <p className="text-red-500">Error: {signUpError}</p>
              )} */}
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 hover:bg-violet-500 transition-all"
                >
                  Sign Up
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-600">
                Already have an account?
                <Link to ="/login"
                  className="hover:underline text-violet-700 ml-1"
                >
                  Sign In
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
