import Hero from "@/MainComponents/views/Hero/Hero";
import ProductCategory from "@/MainComponents/views/ProductCategory/ProductCategory";
import ShipDetails from "@/MainComponents/views/ShippingDetails/ShipDetails";
import Newsletter from "@/MainComponents/views/Newsletter/Newsletter";
import PromoProduct from "@/MainComponents/views/PromoProducts";
import BASE_PATH_FORAPI from "@/MainComponents/shared/BasePath";
import ProductCarousel from "@/MainComponents/views/SanityProducts/ProductCarousel";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/product`);
  if (!res.ok) {
    throw new Error("failed to fetch data ");
  }
  return res.json();
}
export default async function Home() {
  let { response } = await fetchAllProductsData();
  console.log("response : ", response);

  return (
    <div>
      <Hero />
      <ProductCarousel />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </div>
  );
}
