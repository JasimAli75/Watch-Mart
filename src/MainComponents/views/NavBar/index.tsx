"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/assets/logo.png";
import { Input } from "@/components/ui/input";
import { GoTriangleDown } from "react-icons/go";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Search, ShoppingCart } from "lucide-react";
import {
  NavbarArray,
  NavbarItemType,
} from "@/MainComponents/utils/NavBarTypes";
import DropDown from "../Categorylist/DropDown";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import { ThemeToggle } from "@/MainComponents/ThemsToggle/theme-toggle";

// className="flex sm:items-center justify-between items-center  w-full h-full "
const NavBar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor">
      <div className="  w-full h-24 shadow-xl z-[100] ">
        <div className="flex sm:items-center justify-around  items-center py-6">
          <Link href={"/"}>
            <Image
              src={logo}
              width={180}
              height={70}
              alt="logo"
              className="cursor-pointer "
            />
          </Link>
          <ul className=" md:flex hidden relative uppercase items-center space-x-10 font-normal  text-[19px] hover:text-blue-600  ">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="flex items-center relative rounded-lg px-3 py-1 hover:bg-gray-100 cursor-pointer group"
              >
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <GoTriangleDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                    size={12}
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div className="invisible group-hover:visible  absolute left-0 top-9 py-4 px-6 bg-gray-100 font-light min-w-[7.8rem]">
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div
            className="lg:md:flex hidden  relative  items-center text-gray-400
      focus-within:text-gray-600"
          >
            <Search className="w-5 h-5 absolute ml-3 pointer-events-none" />

            <Input
              type="text"
              name="search"
              placeholder="Your desire watch"
              className="pr-36 pl-10 py-1 w-full font-medium rounded-xl"
            />
          </div>
          <div className=" flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full md:flex hidden  items-center justify-center">
            <div className=" w-4 h-4 absolute mb-7 ml-4 bg-red-400 text-xs font-light rounded-full flex justify-center items-center    ">
              6
            </div>
            <ShoppingCart size={20} />
          </div>
          <div>
            {" "}
            <ThemeToggle />
          </div>
          <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <div className="flex  md:hidden">
                <IoMdClose size={25} />
              </div>
            ) : (
              <div className="flex  md:hidden">
                <HiMenu size={25} />
              </div>
            )}
          </div>
        </div>
      </div>

      {isNavbarOpen && <MobileNavBar />}
    </div>
  );
};

export default NavBar;
