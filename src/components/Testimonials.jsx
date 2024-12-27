
import React from 'react'

import customerimg from "../assets/customerimg.png"
import framedots from "../assets/framedots.png"

const Testimonials = () => {
  return (
    <>
      <div>
        <section id="testimonials" className="py-10 lg:py-20 bg-gray-50 linear-gradient from-[#63ABFF] to-[#106CD9]">
          <div className="container mx-auto px-4">

            <h6 className="text-gray-600 text-left mb-8 font-bold text-xl">
              Customer Experiences
            </h6>

            <div className="flex flex-col md:flex-row md:space-x-6">


              <div className="flex-1 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <p className="mt-4 text-gray-600">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                    Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={customerimg}
                      alt="Jane Doe"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Jane Doe</p>
                      <p className="text-sm text-gray-500">Director of Research and Data</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex-1 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-lg shadow-md mt-6 md:mt-0">
                  <p className="mt-4 text-gray-600">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                    Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={customerimg}
                      alt="John Doe"
                    />
                    <div>
                      <p className="font-medium text-gray-800">John Doe</p>
                      <p className="text-sm text-gray-500">Director of Research and Data</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-md mt-6 md:mt-0">
                  <p className="mt-4 text-gray-600">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                    Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={customerimg}
                      alt="Jane Smith"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Jane Smith</p>
                      <p className="text-sm text-gray-500">Director of Research and Data</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='mt-10 flex justify-center'>
            <img src={framedots} alt="Frame dots" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Testimonials

