import Hero from "@/MainComponents/views/Hero/Hero";
import ProductCategory from "@/MainComponents/views/ProductCategory/ProductCategory";
import ShipDetails from "@/MainComponents/views/ShippingDetails/ShipDetails";
import Newsletter from "@/MainComponents/views/Newsletter/Newsletter";
import PromoProduct from "@/MainComponents/views/PromoProducts";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </div>
  );
}
