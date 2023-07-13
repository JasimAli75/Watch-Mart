import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/MainComponents/views/Hero/Hero";
import ProductCategory from "@/MainComponents/views/ProductCategory/ProductCategory";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCategory />
    </div>
  );
}
