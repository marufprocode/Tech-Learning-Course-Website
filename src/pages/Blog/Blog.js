import React from "react";
import { Link } from "react-router-dom";
import ArticleSlicer from "./ArticleSlicer";

const Blog = () => {
  return (
    <div className="">
      <div className="bg-gray-100 min-h-screen text-gray-700 py-10">
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-emerald-200">
          <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" alt="imageJS" className="h-[300px] w-full mb-5"/>
          <div className="blog-body px-10 pt-1 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Jun 1, 2020</span>
            <Link to ="/#"
              className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900"
            >
              Javascript
            </Link>
          </div>
          <div className="mt-3">
            <Link to ="/#"
              className="text-2xl font-bold hover:underline"
            >
              Nos creasse pendere crescit angelos etc
            </Link>
            <p className="mt-2">
              <ArticleSlicer>
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
              </ArticleSlicer>
            </p>
          </div>
          <div className="flex items-center justify-end mt-4">
            <div>
              <Link to="/#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-700">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
