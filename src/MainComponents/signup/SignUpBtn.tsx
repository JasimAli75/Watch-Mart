"use client";
import React from "react";
import { SignUpButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

function SignUp() {
  return (
    <div className="flex justify-between gap-5 items-center">
      <div
        className=" md:flex hidden w-20 h-9 rounded-2xl bg-gray-200 text-black
    uppercase text-base font-semibold hover:bg-purple-400 hover:text-white duration-300 px-11  justify-center items-center"
      >
        <SignUpButton>Login</SignUpButton>
      </div>
      <div className=" md:flex hidden w-10 h-10 rounded-full bg-gray-200  justify-center items-center">
        <ShoppingCart className=" h-5 w-5" />
      </div>
    </div>
  );
}

export default SignUp;
