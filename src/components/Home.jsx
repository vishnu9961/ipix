
import React from 'react'
import { GoArrowUpRight, GoArrowLeft, GoArrowRight } from "react-icons/go"
import logo from '../assets/Logo.png'
import logo1 from '../assets/Logo1.png'
import logo2 from '../assets/Logo2.png'
import mask1 from '../assets/Maskgroup.png'
import mask2 from '../assets/Rectangle.png'
import ball from '../assets/Ellipse.png'

const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-20">
      
          <div className="px-6 md:px-20 lg:px-40">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              We Provide The Best <br /> Solution For Your Business <br /> Development
            </h1>
            <p className="mt-5 text-base md:text-lg">
              Tincidunt vitae bibendum et interdum in. Mi sed egestas gravida <br />
              egestas ornare neque odio a risus.
            </p>
            <button className="bg-black text-white px-10 py-2 inline-flex items-center mt-5 text-sm md:text-base">
              Get Started
              <GoArrowUpRight className="ml-2" />
            </button>

            <hr className="mt-10 border-black" />

            <div className="flex items-center justify-between mt-5 w-full">
              <p className="text-sm md:text-base">
                We Provide Best OpenText Service to many <br /> Worldwide companies
              </p>
              <div className="flex">
                <GoArrowLeft className="text-black rounded-full p-2 bg-gray-300 text-2xl mx-2" />
                <GoArrowRight className="text-black rounded-full p-2 bg-gray-300 text-2xl mx-2" />
              </div>
            </div>

            <div className="text-2xl font-bold mt-10">Trusted By 400+ Companies</div>

            <div className="flex items-center gap-4 mt-3 justify-start w-full">
              <img src={logo} alt="Logo" className="w-16 sm:w-12 md:w-16 lg:w-20" />
              <img src={logo2} alt="Logo2" className="w-16 sm:w-12 md:w-16 lg:w-20" />
              <img src={logo1} alt="Logo1" className="w-16 sm:w-12 md:w-16 lg:w-20" />
            </div>
          </div>

        
          <div className="px-6 md:px-20 lg:px-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-lg">
         
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-center border border-gray-50 rounded-lg bg-[#F3F3F3] px-4 py-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Accelerating</h2>
                    <h3 className="text-xl font-medium text-gray-700 leading-tight">
                      Business Growth <br />
                      through SAPTech <br />
                      Expertise
                    </h3>
                    <hr className="mt-10 border-black" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative flex items-center bg-black rounded-xl p-4">
                    <div className="absolute top-4 left-2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <img className="absolute w-full h-full" src={ball} alt="Ball" />
                      <span className="text-black text-sm font-medium z-10">9.8</span>
                    </div>
                    <div className="text-white ml-6">
                      <p className="font-medium">Overall Clients Rate</p>
                      <p className="text-sm">More than 10K <span className="underline">reviews</span></p>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="relative grid grid-cols-1 gap-4">
                <div>
                  <img className="rounded-lg w-full h-auto" src={mask1} alt="Abstract Illustration" />
                </div>
                <div>
                  <img className="rounded-lg w-full h-auto" src={mask2} alt="Professional" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
