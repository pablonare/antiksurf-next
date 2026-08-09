import type { Metadata } from "next";

import { shopifyClient } from "@/lib/shopify/client";
import { PRODUCTS_QUERY } from "@/lib/shopify/queries";
import {COLLECTION_BY_HANDLE_QUERY,} from "@/lib/shopify/queries";

import ShopNavigation from "@/components/shop/shopnavigation/ShopNavigation";
import ProductGrid from "@/components/shop/components/CollectionGrid/CollectionGrid";

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

  const { data: collectionData, errors: collectionErrors } =
    await shopifyClient.request(COLLECTION_BY_HANDLE_QUERY, {
      variables: {
        handle: "best-sellers",
      },
    });

  if (errors) {
    console.error("Shopify error:", errors);
  }

  if (collectionErrors) {
    console.error("Shopify collection error:", collectionErrors);
  }

  return (
    <>
     
      <div style={{ height: "65px" }} />
      <ShopNavigation />
      <Container>
        <ProductGrid handle="best-sellers" heading="T-shirts"/>
      </Container>
    </>
  );
}