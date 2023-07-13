"use client";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const MobileNavBar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
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
  );
};

export default MobileNavBar;
