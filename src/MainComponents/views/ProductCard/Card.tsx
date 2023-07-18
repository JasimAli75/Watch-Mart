import { oneProductType } from "@/MainComponents/utils/ProductsDataArrayAndType";
import React, { FC } from "react";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

const builder = ImageUrlBuilder(client);

const Card: FC<{ SingleProductData: oneProductType }> = (SingleProductData) => {
  function urlFor(source: any) {
    return builder.image(source);
  }

  return <div>items</div>;
};

export default Card;




