import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

function ShipDetails() {
  return (
    <div className="flex justify-evenly items-center mt-20 mb-20 bg-slate-200 h-20 rounded-full">
      {/* 30 days return */}
      <div className="flex items-center gap-3 ">
        <AiOutlineArrowRight className="h-8 w-8 hover:scale-110 eas-In duration-300 " />

        <div>
          <h1 className="text-lg font-semibold sm:flex hidden">
            30 days return policy
          </h1>
          <p className="text-sm md:flex hidden">
            Get your money back for any purchase
          </p>
        </div>
      </div>
      {/* Free shipping */}
      <div className="flex items-center gap-3">
        <FaShippingFast className="h-8 w-8 hover:scale-110 eas-In duration-300" />
        <div>
          <h1 className="text-lg font-semibold sm:flex hidden">
            Free express shipping{" "}
          </h1>
          <p className="text-sm md:flex hidden">Free shipping over $200</p>
        </div>
      </div>
      {/* Secure payment */}
      <div className="flex items-center gap-3">
        <RiSecurePaymentLine className="h-8 w-8 hover:scale-110 eas-In duration-300" />
        <div>
          <h1 className="text-lg font-semibold sm:flex hidden">
            Secure payment
          </h1>
          <p className="text-sm md:flex hidden">
            Clear pricing and fast payouts
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShipDetails;
