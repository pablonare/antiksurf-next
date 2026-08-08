import type { Metadata } from "next";

import { shopifyClient } from "@/lib/shopify/client";
import { PRODUCTS_QUERY } from "@/lib/shopify/queries";
import Hero from "@/components/shop/hero/Hero";
import ProductGrid from "@/components/shop/products/ProductGrid";
import Container from "@/components/ui/Container/Container";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop the Antik Surf Club selection of surf-inspired products, gear and essentials.",
  alternates: {
    canonical: "/shop",
  },
};

export default async function Page() {
  const { data, errors } = await shopifyClient.request(PRODUCTS_QUERY);

  if (errors) {
    console.error("Shopify error:", errors);
  }

  const products = data?.products?.nodes ?? [];

  return (
    <>
      <Hero />
      <Container>
        <ProductGrid products={products} />
      </Container>
    </>
  );
}