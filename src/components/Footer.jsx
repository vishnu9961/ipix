import React from "react";
import footerlogo from '../assets/footerlogo.png'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <>




    <footer className="bg-[#0A122A] text-white py-10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div className="space-y-4">
            <div className="flex flex-col items-center space-x-2">
              <img
                src={footerlogo}
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <h2 className="text-sm">SAPTECHCONSULTING</h2>
            </div>
            <p className="text-sm text-justify">
              We Provide The Best Solution For Your Business Development
            </p>
            <div className="flex space-x-4">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Knowledge
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  OpenText
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  SAP
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Finance Services
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
           
                <CiLocationOn />
                <span className="text-sm">
                  Cybernetyki 10, 02-677, Warsaw, Poland
                </span>
              </li>
              <li className="flex items-center space-x-2">
             
                <IoMdMail />
               
                <span className="text-sm">info@saptech.com</span>
              </li>
              <li className="flex items-center space-x-2">
               
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
