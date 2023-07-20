/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FaChevronLeft,
  FaStar,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";
import cardImage from "../../../../public/DP/DP4.png";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      {/* COntainer */}
      <div className="bg-gray-100 flex h-full items-center justify-center w-full">
        {/* ProductCard */}
        <div className="bg-white duration-300 flex flex-col max-w-xs rounded-x1 shadow-lg space-y-4 transform w-full hover:-translate-y-2 ">
          {/* back Button, reviews and favorite */}
          <div className="flex flex-row items-center justify-between pt-4 px-4">
            <Button
              variant="outline"
              className="duration-150 p-1 transform hover:-translate-x-1 bg-opacity-10"
            >
              <FaChevronLeft size={25} className="" />
            </Button>
            <div className=" flex flex-row items-center space-x-4">
              <div className="inline-flex items-center">
                <FaStar className="mr-1 text-yellow-300" />
                <p className="font-medium">4.6</p>
              </div>
              <Button
                variant="outline"
                className="p-2 rounded-full text-red-400 transition hover:bg-red-400 hover:shadow-md hover:text-white"
              >
                <FaHeart />
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <Link href={"/"}>
              <Image
                src={cardImage}
                height={230}
                width={230}
                alt="product image"
              />
            </Link>
          </div>
          {/* title, options and quantity */}
          <div className="flex flex-col px-4 space-y-1">
            <div className="flex flex-col -space-y-0.5">
              <Link href={"/"}>
                <p className="font-medium tracking-wide w-max">
                  OTTO SILVER WATCH
                </p>
              </Link>
              <p> Men's Watch</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <p className="text-pink-800">S</p>
                  </label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <p className="text-blue-800">M</p>
                  </label>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <Button className=" bg-blue-200 p-2 rounded-md text-gray-800 transition hover:bg-blue-300">
                  <FaMinus />
                </Button>
                <p className="font-medium text-1x">1</p>
                <Button className=" bg-blue-200 p-2 rounded-md text-gray-800 transition hover:bg-blue-300">
                  <FaPlus />
                </Button>
              </div>
            </div>
          </div>
          {/* price, add to cart */}
          <div className="flex flex-row items-center justify-between pb-4 px-4">
            <h1 className="font-medium text-[30px]">$299</h1>
            <del>$100</del>
            <Button className="bg-blue-400 font-medium inline-flex items-center px-4 py-2 rounded-md text-white transition hover:bg-blue-500">
              <FaShoppingCart className="mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
