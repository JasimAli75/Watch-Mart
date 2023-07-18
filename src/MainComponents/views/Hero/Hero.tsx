import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import logo from "/public/assets/hero.png";
import Image from "next/image";
import brand from "/public/Brands/H.png";
import brand2 from "/public/Brands/O.png";
import brand3 from "/public/Brands/R.png";
import brand5 from "/public/Brands/T.png";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row   gap-y-10 py-6 ml-14">
      {/* left side */}
      <div className="flex-1">
        <Badge className="py-2 mt-24 px-6 rounded-lg  text-base bg-blue-200 text-blue-700 hover:bg-blue-200">
          40%
        </Badge>
        <h1 className="scroll-m-20 mt-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
          When a watch says everything about you.
        </h1>
        <p className="mt-6 text-justify">
          The greatest watchmaking innovations are indelible. They imprint the
          dial of each watch with new words that, alone, can attest for the
          unique vision of the brand and experience all brands in one store. It
          encompasses various aspects such as the choice of watch, the way it is
          worn, and the overall aesthetic appeal.Watch wear has evolved over
          time and varies across different cultures and fashion trends.
        </p>
        <Button className="py-6 px-4 mt-11 hover:scale-105 eas-In duration-300">
          <ShoppingCart className="mr-2 h-4 w-4" /> Explore the collection
        </Button>
        <div className=" grid grid-cols-2 sm:grid-cols-4 mt-16  gap-16">
          <Image
            src={brand}
            width={80}
            height={70}
            alt="Brand Logo"
            className="opacity-50"
          />
          <Image
            src={brand2}
            width={80}
            height={70}
            alt="Brand Logo"
            className="opacity-50"
          />
          <Image
            src={brand3}
            width={80}
            height={70}
            alt="Brand Logo"
            className="opacity-50"
          />

          <Image
            src={brand5}
            width={100}
            height={70}
            alt="Brand Logo"
            className="opacity-50"
          />
        </div>
      </div>
      {/* right side*/}
      <div className="flex-grow-2  ">
        <Image src={logo} width={950} height={600} alt="logo" />
      </div>
    </section>
  );
}

export default Hero;
