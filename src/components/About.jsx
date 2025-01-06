
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import aboutimg from '../assets/Rectangle1.png';
import aboutnum from '../assets/number1.png';
import aboutnum2 from '../assets/number2.png';
import rounded from "../assets/round1.png";
import arrow from "../assets/arrow1.png";
import round from "../assets/Ellipse1.png";
import arrow2 from "../assets/rightarrow.png";

const About = () => {
    return (
        <>
           
           
                <div className="flex flex-col md:flex-row items-center justify-around mt-10 px-6 lg:px-20 gap-10 relative">
   
                    <div className="relative w-full md:w-1/2 max-w-md">
                        <img
                            className="w-full rounded-lg"
                            src={aboutimg}
                            alt="About Us"
                        />
                        <div className="absolute bottom-0 right-1 transform translate-x-1/2 translate-y-1/2">
                            <img className="w-20 h-20" src={round} alt="Round Shape" />
                            <img
                                src={arrow2}
                                alt="Arrow"
                                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-8 h-8"
                            />
                        </div>
                    </div>
                
                <div className="flex flex-col items-center md:items-start text-black max-w-lg space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                        Unlocking Business <br /> Potential with Expert SAP <br /> Consultancy
                    </h2>

                    <p className="text-center md:text-left leading-relaxed text-sm md:text-base">
                        Nibh amet penatibus scelerisque nisl mattis a ultrices quam. Ultrices pretium pellentesque mi velit arcu at etiam. Imperdiet eu viverra posuere mollis. Libero varius elementum et et. Scelerisque risus a fringilla interdum dolor rhoncus. Purus vitae auctor faucibus vitae sit nisi morbi vestibulum.
                    </p>

                    <button className="bg-black hover:bg-black text-white font-bold py-3 px-6 rounded-lg inline-flex items-center space-x-2 mt-5">
                        <span>About us</span>
                        <GoArrowUpRight className="text-white text-xl" />
                    </button>
                </div>
            </div>




<div className="flex flex-col md:flex-row justify-around mt-10 px-8 lg:px-24  lg:gap-16">
 
    <div className="flex flex-col items-center md:items-start text-black max-w-lg space-y-3 p-10 lg:p-8">
        <h1 className="text-3xl font-bold text-center md:text-left">
            How can we help you
        </h1>
        <p className="text-center md:text-left leading-relaxed text-sm md:text-base">
            Nibh amet penatibus scelerisque nisl  mattis a ultrices quam. Ultrices pretium  pellentesque.
        </p>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-10 lg:p-8">
      
        <div className="bg-[#07162D] text-[#B4B4C2] p-4 rounded-lg shadow-lg flex flex-col items-start justify-start text-left font-semibold max-w-xs h-44">
            <span className="text-xl">01</span>
            <img className="w-16 my-4" src={aboutnum} alt="Icon" />
            <span className="text-base">Open Text</span>
        </div>

     
        <div className="bg-[#2d63d7] text-[#B4B4C2] p-4 rounded-lg shadow-lg flex flex-col items-start justify-start text-left font-semibold max-w-xs h-60">
            <span className="text-xl">02</span>
            <span className="text-base mt-3">Sap</span>

            <div className="flex items-center justify-end gap-2 mt-3">
                <span className="text-sm">View all</span>
                <div className="relative">
                    <img className="w-6" src={rounded} alt="Rounded" />
                    <img
                        src={arrow}
                        alt="Arrow"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3"
                    />
                </div>
            </div>
        </div>

        
        <div className="bg-[#07162D] text-[#B4B4C2] p-4 rounded-lg shadow-lg flex flex-col items-start justify-start text-left font-semibold max-w-xs h-44">
            <span className="text-xl">03</span>
            <img className="w-12 my-4" src={aboutnum2} alt="Icon" />
            <span className="text-base">Finance Services</span>
        </div>
    </div>
</div>

     
        </>
    );
};

export default About;
