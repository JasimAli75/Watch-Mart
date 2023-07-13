import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/MainComponents/views/Hero/Hero";
import ProductCategory from "@/MainComponents/views/ProductCategory/ProductCategory";
import ShipDetails from "@/MainComponents/views/ShippingDetails/ShipDetails";
import Newsletter from "@/MainComponents/views/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <ShipDetails />
      <Newsletter />
    </div>
  );
}
