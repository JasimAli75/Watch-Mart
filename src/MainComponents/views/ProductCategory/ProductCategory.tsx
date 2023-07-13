import React from "react";
import men from "/public/DP/mens.png";
import kid from "/public/DP/kids.png";

import lady from "/public/DP/ladies.png";
import Image from "next/image";

function ProductCategory() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="group relative cursor-pointer items-center
         justify-center overflow-hidden transition-shadow hover:shadow-xl
          hover:shadow-black/30"
        >
          <div>
            <Image
              src={men}
              alt="MensWatch"
              className="h-full w-full object-cover transition-transform 
            duration-500 group-hover:rotate-3 group-hover:scale-125"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-transparent to-black group-hover:from-black/70
           group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            className="absolute inset-0 flex translate-y-[60%] flex-col items-center
           justify-center px-9 text-center transition-all duration-500 
           group-hover:translate-y-0"
          >
            <h1 className=" text-3xl font-bold text-white mb-36">
              Mens Watches
            </h1>
            <p
              className="mb-3 text-lg italic text-white opacity-0 transition-opacity 
            duration-300 group-hover:opacity-100"
            >
              Find the latest model branded Mens watches in affordable prices.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
          h
        </div>
        <div
          className="group relative cursor-pointer items-center
         justify-center overflow-hidden transition-shadow hover:shadow-xl
          hover:shadow-black/30"
        >
          <div>
            <Image
              src={lady}
              alt="LadiesWatch"
              className="h-full w-full object-cover transition-transform 
            duration-500 group-hover:rotate-3 group-hover:scale-125"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-transparent to-black group-hover:from-black/70
           group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            className="absolute inset-0 flex translate-y-[60%] flex-col items-center
           justify-center px-9 text-center transition-all duration-500 
           group-hover:translate-y-0"
          >
            <h1 className=" text-3xl font-bold text-white mb-32">
              Ladies Watches
            </h1>
            <p
              className="mb-3 text-lg italic text-white opacity-0 transition-opacity 
            duration-300 group-hover:opacity-100"
            >
              Find the latest model ladies branded watches in affordable prices.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
        <div
          className="group relative cursor-pointer items-center
         justify-center overflow-hidden transition-shadow hover:shadow-xl
          hover:shadow-black/30"
        >
          <div>
            <Image
              src={kid}
              alt="kidsWatch"
              className="h-full w-full object-cover transition-transform 
            duration-500 group-hover:rotate-3 group-hover:scale-125"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-transparent to-black group-hover:from-black/70
           group-hover:via-black/60 group-hover:to-black/70"
          ></div>
          <div
            className="absolute inset-0 flex translate-y-[60%] flex-col items-center
           justify-center px-9 text-center transition-all duration-500 
           group-hover:translate-y-0"
          >
            <h1 className=" text-3xl font-bold text-white mb-36">
              Kids Watches
            </h1>
            <p
              className="mb-3 text-lg italic text-white opacity-0 transition-opacity 
            duration-300 group-hover:opacity-100"
            >
              Find the latest model kids branded watches in affordable prices.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
