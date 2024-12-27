
import React from 'react'
import casestudy from "../assets/casestudy1.png"

const CaseStudy = () => {
    return (
        <>
            <div className='flex flex-col mt-10 px-6 lg:px-20'>
                <h1 className='text-3xl font-bold justify-start'>Case Studies</h1>
                <p className='justify-start'>Proud projects that make us stand out</p>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

              
                    <div className="max-w-sm bg-white rounded-lg shadow-md">
                        <div className="bg-[#F2E7E1] p-4 flex justify-center">
                            <a className="cursor-pointer" href="#">
                                <img src={casestudy} alt="Case Study" />
                            </a>
                        </div>
                        <div className="p-5">
                            <h4 className='text-xl font-medium underline decoration-blue-500'>SAP</h4>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    A eu est euismod tristique porta
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam. In consequat aenean id viverra fringilla urna. Senectus at massa dui arcu ac.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-black bg-[#F3F3F3] "
                            >
                                Read more
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                    </div>

                  
                    <div className="max-w-sm bg-white rounded-lg shadow-md">
                        <div className="bg-[#EEF1F6] p-4 flex justify-center">
                            <a className="cursor-pointer" href="#">
                                <img src={casestudy} alt="Case Study" />
                            </a>
                        </div>
                        <div className="p-5">
                            <h4 className='text-xl font-medium underline decoration-blue-500'>SAP</h4>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    A eu est euismod tristique porta
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam. In consequat aenean id viverra fringilla urna. Senectus at massa dui arcu ac.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-black bg-[#F3F3F3] "
                            >
                                Read more
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                    </div>

                  
                    <div className="max-w-sm bg-white rounded-lg shadow-md">
                        <div className="bg-[#F8E8E8] p-4 flex justify-center">
                            <a className="cursor-pointer" href="#">
                                <img src={casestudy} alt="Case Study" />
                            </a>
                        </div>
                        <div className="p-5">
                            <h4 className='text-xl font-medium underline decoration-blue-500'>SAP</h4>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    A eu est euismod tristique porta
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam. In consequat aenean id viverra fringilla urna. Senectus at massa dui arcu ac.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-black bg-[#F3F3F3] "
                            >
                                Read more
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                    </div>

                </div>
            </div>
        </>
    )
}

export default CaseStudy

