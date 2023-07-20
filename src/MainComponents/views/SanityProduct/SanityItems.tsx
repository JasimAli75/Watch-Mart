import React from "react";
import ProductCard from "./ProductCard";
import { fetchTutorials } from "@/app/api/product/route";

const SanityItems = async () => {
  const res = await fetchTutorials(`*[_type == "products"]`);
  // console.log(res);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="font-medium text-2xl text-blue-500">
          {" "}
          Best Summer Deals{" "}
        </h1>
      </div>
      <div className=" flex justify-between items-center mt-5 ">
        {res.map((val: any) => {
          const {
            id,
            url,
            image,
            description,
            category,
            title,
            index: number,
          } = val;
          return (
            <ProductCard
              id={id}
              url={url}
              image={image}
              description={description}
              category={category}
              title={title}
              key={number}
            />
          );
        })}

        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default SanityItems;
