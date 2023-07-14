import React from "react";
import BT from "public/assets/BT.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BN from "/public/assets/Banner.png";

function PromoProduct() {
  return (
    <div className=" flex flex-col lg:flex-row justify-evenly gap-10 ml-8 ">
      {/* left */}
      <div className="flex-1">
        <h1 className="font-semibold text-5xl mb-5 mt-2">
          What we offer to you
        </h1>
        <p className="text-lg text-justify py-3">
          We will offer you only good quality products with strong materials,
          design and functionality. We stand behind our products, so if there is
          some problem or you are not satisfied. We will help you 100% and give
          your money back if that is the case.
        </p>
        <h1 className="font-semibold text-3xl mt-5 mb-3">Our mission</h1>
        <p className="text-lg text-justify py-3">
          Our mission is to find the best products on the market and sell it for
          a cheaper price then others. Most of our products ships from China or
          US. The shipping time can be from 8-25 days (approximately). See
          further descriptions on the product pages.
        </p>

        <div
          className="group relative cursor-pointer items-center
         justify-center overflow-hidden transition-shadow hover:shadow-2xl
         hover:shadow-black/20"
        >
          <div>
            <Image
              src={BN}
              alt="Banner"
              className="flex justify-center items-centers mt-10 h-full w-full object-cover transition-transform 
              duration-500 group-hover:scale-105 "
            />
          </div>
          <div
            className="absolute inset-0 flex translate-y-[60%] flex-col items-center
           justify-center px-2 text-center transition-all duration-500 
           group-hover:translate-y-0"
          >
            <h1 className=" text-3xl font-bold text-white mb-28">
              Summer Sale
            </h1>
            <p
              className="mb-2 text-lg italic text-white opacity-0 transition-opacity 
            duration-300 group-hover:opacity-100"
            >
              Find the latest big discounts.
            </p>
            <button className="rounded-3xl bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More discounts
            </button>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-1  mr-8">
        <h3 className="font-semibold text-5xl mb-11">
          The best service you get from Us!
        </h3>
        <div className="  flex flex-col lg:flex-row ">
          <Image src={BT} alt="BottomPic" />
          <div className="px-3 gap-4">
            <h2 className="text-3xl font-semibold">Why chose Us!</h2>
            <p className=" text-lg text-justify mt-3">
              We provide the best products for you with 100% money back
              guarantee. Our team are made of people passionate for watches. We
              believe that a watch is just as important as your socks, t-shirt,
              your underwear! Without a watch you lose a big part of your style.
              Look at celebrities, almost all of them wear a watch right? Thats
              because they know what a simple watch can do to your style.
            </p>
            <div className="flex justify-center items-center mt-28">
              <Button className="h-12 w-60 hover:scale-105 eas-In duration-300">
                See all products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoProduct;
