
import React from 'react'

import awardellipse from '../assets/awardellipse.png'
import microsft from '../assets/microsoft.png'
import cloud from '../assets/googlecloud.png'
import aws from '../assets/aws.png'

const Awards = () => {
    return (
        <>

            <div className='flex flex-col mt-10 px-6 lg:px-20'>
                <h1 className='text-3xl font-bold justify-start'>Awards and Certificates</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">

                  
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-3 h-3" src={awardellipse} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

                  
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-3 h-3" src={awardellipse} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

                  
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-3 h-3" src={awardellipse} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

                 
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-22 h-12" src={microsft} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

           
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-22 h-12" src={cloud} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

           
                    <div className="max-w-sm bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between px-5">
                            <img className="rounded-full w-22 h-12" src={aws} alt="Award" />
                            <p className="text-right text-gray-700">2022</p>
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                    SAP Pinnacle Awards
                                </h6>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Eleifend ornare aliquet sed sed lacus cras mattis maecenas quam.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Awards

