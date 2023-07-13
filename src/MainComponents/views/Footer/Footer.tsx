import Image from "next/image";
import React from "react";
import logo from "/public/assets/logo.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 flex-shrink">
          <Image src={logo} width={170} height={120} alt="logo" />
          <ul>
            <p className="font-medium text-base opacity-70 mt-14">
              Small, artisan label that offers a thoughtfully
            </p>
            <p className="font-medium text-base opacity-70">
              {" "}
              curated collection of high quality everyday
            </p>
            <p className="font-medium text-base opacity-70">
              {" "}
              Information with service essentials made.
            </p>
            <p className="font-medium text-base opacity-70">
              {" "}
              providers to help We share your Personal
            </p>
            <p className="font-medium text-base opacity-70">
              {" "}
              us provide our services and fulfill our contracts.
            </p>

            <div className="flex gap-6 pb-5 mt-8">
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer  hover:text-blue-600" />
              <FaFacebookSquare className="text-2xl cursor-pointer  hover:text-blue-600" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Watches
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Help
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Legal notice
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms of service
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Refund policy
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-evenly items-center text-center  p-5 bg-gray-200">
        <h1 className=" text-gray-800 font-semibold">
          ©2023 WatchMart, Powered by Panaverse DAO
        </h1>
        <h1>
          Code by:
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Jasim Ali Rajput
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
