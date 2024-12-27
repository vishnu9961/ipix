
import React from 'react'
import line from "../assets/line1.png"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import services from "../assets/Services.png"
import line2 from "../assets/line2.png"
import signature from "../assets/Saptech.png"
import { FaCheck } from "react-icons/fa";
import WhyChooseUs from './WhyChooseUs';

const Services = () => {
    return (
        <>
           
            <div className='mt-10 flex justify-around items-center px-6 lg:px-20'>
                <div className="flex gap-4 items-center">
                    <img src={line} alt="Line" />
                    <span>02/03</span>
                </div>
                <div className="flex gap-2 mx-4">
                    <GoArrowLeft className="text-black rounded-full p-2 bg-gray-300 text-3xl" />
                    <GoArrowRight className="text-black rounded-full p-2 bg-gray-300 text-3xl" />
                </div>
            </div>

           
            <img className='w-3/4 mx-auto justify-center items-center' src={services} alt="Services" />

           
            <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 gap-10 max-w-7xl mx-auto mt-10">

            
                <div className="flex flex-col items-center text-gray-600 max-w-lg space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                        I am thrilled to address you today as the CEO of SAPTech Consultancy, a leading provider of innovative SAP solutions.
                    </h2>
                    <img src={signature} alt="Signature" className="mx-auto w-24" />
                    <p className="text-center font-bold leading-relaxed">John Doe</p>
                    <p className="text-center leading-relaxed">CEO, SAPTECH</p>
                </div>

             
                <div className="hidden md:block mx-6">
                    <img src={line2} alt="Vertical Line" className="h-auto" />
                </div>

             
                <div className="flex flex-col items-center md:items-start text-gray-600 max-w-lg mt-6 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                        What makes us <br /> different from other
                    </h2>

                  
                    <div className="flex items-start gap-2 mt-8 md:mt-10">
                        <FaCheck className="text-green-500 text-xl" />
                        <div>Mastering SAP Solutions for Optimal Business Performance</div>
                    </div>
                    <div className="flex items-start gap-2 mt-3">
                        <FaCheck className="text-green-500 text-xl" />
                        <div>Unleashing the Power of SAP for Business Success</div>
                    </div>
                    <div className="flex items-start gap-2 mt-3">
                        <FaCheck className="text-green-500 text-xl" />
                        <div>SAP Experts: Crafting Tailored Solutions for Your Business</div>
                    </div>
                </div>

            </div>

           
            <WhyChooseUs />
        </>
    )
}

export default Services;
