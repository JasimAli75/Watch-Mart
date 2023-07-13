import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/assets/logo.png";
import { Input } from "@/components/ui/input";
import { BsChevronCompactDown } from "react-icons/bs";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavbarArray,
  NavbarItemType,
} from "@/MainComponents/uitls/NavBarTypes";

// className="flex sm:items-center justify-between items-center  w-full h-full "
const NavBar = () => {
  return (
    <div className="  w-full h-24 shadow-xl z-[100] ">
      <div className="flex sm:items-center justify-evenly  items-center py-6">
        <Link href={"/"}>
          <Image
            src={logo}
            width={180}
            height={70}
            alt="logo"
            className="cursor-pointer "
          />
        </Link>
        <ul className=" md:flex hidden relative uppercase items-center space-x-10 font-normal  text-[19px] hover:text-blue-800  ">
          {NavbarArray.map((item: NavbarItemType, index: number) => (
            <li key={index} className="flex items-baseline">
              <Link href={item.href}>{item.label}</Link>
              {item.isDropDown ? (
                <BsChevronCompactDown className="mt-1 rotate-180" size={10} />
              ) : (
                ""
              )}
              <div className="absolute mt-7 p-2 border border-green-800">
                jasim
              </div>
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
        <div className="  w-8 h-8 bg-gray-200 rounded-full md:flex hidden  items-center justify-center">
          <div className=" w-4 h-4 absolute mb-7 ml-4 bg-red-400 text-xs font-light rounded-full flex justify-center items-center    ">
            6
          </div>
          <ShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
