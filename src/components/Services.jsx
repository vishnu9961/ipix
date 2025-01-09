
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
        <div className="mt-10 flex flex-col sm:flex-row justify-around items-center px-4 sm:px-6 lg:px-20">
            <div className="flex gap-4 items-center mb-4 sm:mb-0">
                <img src={line} alt="Line" className="w-8 h-auto sm:w-auto" />
                <div className="flex items-baseline">
                    <span className="font-bold text-2xl sm:text-xl">02</span>
                    <span className="text-gray-400 text-lg sm:text-sm">/03</span>
                </div>
            </div>
            <div className="flex gap-2">
                <GoArrowLeft className="text-black rounded-full p-2 bg-gray-300 text-3xl sm:text-2xl" />
                <GoArrowRight className="text-black rounded-full p-2 bg-gray-300 text-3xl sm:text-2xl" />
            </div>
        </div>
            <img className='w-3/4 mx-auto justify-center items-center' src={services} alt="Services" />
            <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 gap-10 max-w-7xl mx-auto mt-10">
                <div className="flex flex-col items-center text-black max-w-lg space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center">
                        I am thrilled to address you today as the CEO of SAPTech Consultancy, a leading provider of innovative SAP solutions.
                    </h2>
                    <img src={signature} alt="Signature" className="mx-auto w-24" />
                    <p className="text-center font-bold leading-relaxed">John Doe</p>
                    <p className="text-center leading-relaxed">CEO, SAPTECH</p>
                </div>

             
                <div className="hidden md:block mx-6">
                    <img src={line2} alt="Vertical Line" className="h-auto" />
                </div>

             
                <div className="flex flex-col items-center md:items-start text-black max-w-lg mt-6 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                        What makes us <br /> different from other
                    </h2>

                  
                    <div className="flex items-start gap-2 mt-8 md:mt-10">
                        <FaCheck className="text-[#106CD9] text-xl" />
                        <div>Mastering SAP Solutions for Optimal Business Performance</div>
                    </div>
                    <div className="flex items-start gap-2 mt-3">
                        <FaCheck className="text-[#106CD9] text-xl" />
                        <div>Unleashing the Power of SAP for Business Success</div>
                    </div>
                    <div className="flex items-start gap-2 mt-3">
                        <FaCheck className="text-[#106CD9] text-xl" />
                        <div>SAP Experts: Crafting Tailored Solutions for Your Business</div>
                    </div>
                </div>

            </div>

           
            <WhyChooseUs />
        </>
    )
}

export default Services;
