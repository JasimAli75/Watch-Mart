import Hero from "@/MainComponents/views/Hero/Hero";
import ProductCategory from "@/MainComponents/views/ProductCategory/ProductCategory";
import ShipDetails from "@/MainComponents/views/ShippingDetails/ShipDetails";
import Newsletter from "@/MainComponents/views/Newsletter/Newsletter";
import PromoProduct from "@/MainComponents/views/PromoProducts";
import BASE_PATH_FORAPI from "@/MainComponents/shared/BasePath";
import SanityProducts from "@/MainComponents/views/SanityLinkProduct/SanityProducts";
import { responseType } from "@/MainComponents/uitls/ProductsDataArrayAndType";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!res.ok) {
    throw new Error("failed to fetch data ");
  }
  return res.json();
}

export default async function Home() {
  let { response } = await fetchAllProductsData();

  return (
    <div>
      <Hero />
      <SanityProducts ProductData={response} />
      <ProductCategory />
      <ShipDetails />
      <PromoProduct />
      <Newsletter />
    </div>
  );
}
