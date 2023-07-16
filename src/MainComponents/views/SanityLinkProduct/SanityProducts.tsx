"use client";
import { oneProductType } from "@/MainComponents/uitls/ProductsDataArrayAndType";
import { FC } from "react";
const SanityProducts = ({ ProductData }: any) => {
  return <div>{ProductData[0].productName}</div>;
};
export default SanityProducts;

// : FC<{ ProductData: Array<oneProductType> }> = ({
//   ProductData,
// }) => {
//   return <div>{ProductData}[0].productName</div>;
// };
