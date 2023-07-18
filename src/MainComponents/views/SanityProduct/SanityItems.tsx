import { oneProductType } from "@/MainComponents/utils/ProductsDataArrayAndType";
import React, { FC } from "react";
import Card from "../ProductCard/Card";

const SanityItems: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}: any) => {
  return (
    <div>
      {ProductData.map((items: oneProductType, index: number) => (
        <Card SingleProductData={items} key={index} />
      ))}
    </div>
  );
};

export default SanityItems;
