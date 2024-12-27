
import React from 'react';
import blog from "../assets/Blog.png";
import blogimg from "../assets/blogimg.png";

const Blog = () => {
    return (
        <>
            <div className="mt-10 ">
                <div className="flex flex-col lg:flex-row  justify-between px-6 lg:px-20 md:gap-24">

                  
                    <div className="flex flex-col items-center lg:items-start text-gray-600 max-w-lg space-y-6 lg:space-y-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-center lg:text-left">
                            News & Blogs
                        </h2>
                        <img src={blog} alt="Blog" className="mb-6 max-w-full" />
                        <h4 className="text-xl font-bold">
                            What makes us different from other
                        </h4>
                        <p className="text-center lg:text-left leading-relaxed">
                            Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam. In consequat aenean id viverra fringilla urna. Senectus at massa dui arcu ac.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-[#F3F3F3] hover:bg-gray-200 rounded-lg"
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

                   
                    <div className="flex flex-col lg:flex-col mt-10 gap-6 lg:gap-8 w-full lg:w-1/2">
                        
                        <div className="flex items-start gap-4 w-full">
                            <div className="w-40 h-32 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={blogimg}
                                    alt="Blog"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm h-5 w-24 text-blue-900 bg-[#63ABFF] text-center">Finance</h3>
                                <p className="text-sm text-gray-600 mt-5 font-bold">
                                    What makes us different <br />
                                    from other
                                </p>
                                <p className="text-xs text-gray-500 mt-5">May 2023</p>
                            </div>
                        </div>

                      
                        <div className="flex items-start gap-4 w-full">
                            <div className="w-40 h-32 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={blogimg}
                                    alt="Blog"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm h-5 w-24 text-blue-900 bg-[#63ABFF] text-center">Finance</h3>
                                <p className="text-sm text-gray-600 mt-5 font-bold">
                                    What makes us different <br />
                                    from other
                                </p>
                                <p className="text-xs text-gray-500 mt-5">May 2023</p>
                            </div>
                        </div>

                       
                        <div className="flex items-start gap-4 w-full">
                            <div className="w-40 h-32 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={blogimg}
                                    alt="Blog"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm h-5 w-24 text-blue-900 bg-[#63ABFF] text-center">Finance</h3>
                                <p className="text-sm text-gray-600 mt-5 font-bold">
                                    What makes us different <br />
                                    from other
                                </p>
                                <p className="text-xs text-gray-500 mt-5">May 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;


