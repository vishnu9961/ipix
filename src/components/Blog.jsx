

import React from "react";
import blog from "../assets/Blog.png";
import blogimg from "../assets/blogimg.png";

const Blog = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col items-center lg:flex-row justify-between px-6 lg:px-10 xl:px-20 gap-10 lg:gap-16 max-w-screen-xl mx-auto">
        
          <div className="flex flex-col items-center lg:items-start text-black w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <h2 className="text-3xl font-bold text-center lg:text-left">
              News & Blogs
            </h2>
            <img src={blog} alt="Blog" className="w-full max-w-md" />
            <h4 className="text-xl font-bold text-center lg:text-left">
              What makes us different from other
            </h4>
            <p className="text-center lg:text-left leading-relaxed">
              Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam. In consequat aenean id viverra fringilla urna. Senectus at massa dui arcu ac.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black  rounded-lg"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

        
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 w-full p-4 rounded-lg shadow-sm"
              >
                <div className="w-40 h-32 rounded-lg overflow-hidden">
                  <img
                    src={blogimg}
                    alt="Blog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-sm text-blue-900 bg-[#63ABFF] text-center rounded-md px-2 py-1">
                    Finance
                  </h3>
                  <h2 className="text-xl text-gray-600 font-bold">
                    What makes us different <br />
                    from other
                  </h2>
                  <p className="text-xs text-gray-500">May 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;































