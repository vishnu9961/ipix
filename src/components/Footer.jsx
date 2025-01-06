


import React from "react";
import footerlogo from "../assets/footerlogo.png";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import talking from "../assets/talkimg.png";
import { FaArrowRight } from "react-icons/fa";
import messageicon from "../assets/messageicon.png";
const Footer = () => {
  return (
    <>

      <div className="relative py-16 lg:py-20 mt-20">

        <div className="absolute left-40 top-0 lg:top-1/2 transform -translate-y-1/2">
          <img
            src={talking}
            alt="Talk with us"
            className="w-28 sm:w-36 md:w-44 lg:w-56 object-cover"
          />
        </div>


        <div className="container mx-auto px-4 lg:px-16 flex flex-col items-center lg:items-start lg:flex-row lg:pl-96 relative">

          <img
            className="absolute  top-[-8px] w-32 ml-16 transform -translate-y-1/2 z-40"
            src={messageicon}
            alt="Message Icon"
          />


          <div className="bg-[#ECF2FC] relative p-6 sm:p-8 md:p-8 rounded-md shadow-md flex flex-col md:flex-row items-center w-full lg:w-auto">
            <p className="text-base md:text-lg font-medium text-gray-800 text-center md:text-left">
              We Provide The Best Solution For Your Business Development
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm md:text-lg font-semibold flex items-center mt-4 md:mt-0 md:ml-8 hover:underline"
            >
              Let’s Talk with us <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

      </div>


      <footer className="bg-[#0A122A] text-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="space-y-4 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={footerlogo}
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />
                <h2 className="text-sm mt-2">SAPTECHCONSULTING</h2>
              </div>
              <p className="text-sm">
                We Provide The Best Solution For Your Business Development
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube text-lg"></i>
                </a>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 md:text-left">
                {["Home", "About Us", "Services", "Careers", "Knowledge", "Contact Us"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm hover:underline">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>


            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2  md:text-left">
                {["OpenText", "SAP", "Finance Services"].map((service, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm hover:underline">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-4  md:text-left">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <CiLocationOn />
                  <span className="text-sm">
                    Cybernetyki 10, 02-677, Warsaw, Poland
                  </span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <IoMdMail />
                  <span className="text-sm">info@saptech.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <FaPhoneAlt />
                  <span className="text-sm">(000) 000 000 00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
