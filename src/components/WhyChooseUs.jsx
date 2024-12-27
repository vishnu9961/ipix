import React from 'react'


import loading from "../assets/loading.png"
import chooseusimg from "../assets/chooseusimg.png"
import growth from "../assets/growthimg.png"
import chooselipse from "../assets/chooseusellipse.png"



const WhyChooseUs = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-around mt-10 px-6 lg:px-20 gap-10">

                <div className="flex flex-col items-center md:items-start text-gray-600 max-w-lg space-y-6">

                    <h2 className="text-2xl font-semibold text-center md:text-left">
                        Why Choose us?
                    </h2>


                    <p className="text-center md:text-left leading-relaxed">
                        Tincidunt a cursus etiam convallis neque pharetra egestas. Nunc proin fermentum sollicitudin risus ornare facilisi at rhoncus.m.
                    </p>

                    <p className="text-center md:text-left leading-relaxed">
                        We have 35+ years of experience. We offer marketing and consulting services
                    </p>

                    <div class="grid grid-cols-2 gap-2">
                        <div className=' flex flex-col'>
                            <span className='text-3xl font-bold'>1550</span>
                            <span>Happy Clients</span>
                        </div>

                        <div className=' flex flex-col'>
                            <span className='text-3xl font-bold'>80%c</span>
                            <span>Business Growth</span>
                            <div className="relative w-1/2">

                                <img src={loading} alt="Loading Background" className="w-full" />
                                <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: "50%" }}></div>
                            </div>

                        </div>

                        <div className=' flex flex-col'>
                            <span className='text-3xl font-bold'>230+</span>
                            <span>Trusted By Companies</span>
                        </div>



                    </div>
                </div>

                <div className="relative w-full md:w-1/2 max-w-md">



                    <img
                        className=" w-full rounded-lg z-10"
                        src={chooseusimg}
                        alt="About Us"
                    />

                    <img
                        className="absolute  left-[-10%] top-[15%] transform -translate-y-1/2 w-60 opacity-40 z-0"
                        src={chooselipse}
                        alt="Ellipse Background"
                    />



                    <img
                        className="absolute left-[-20%] top-[80%] transform -translate-y-1/2 w-1/2"
                        src={growth}
                        alt="Growth"
                    />


                </div>



            </div>
        </>
    )
}

export default WhyChooseUs
