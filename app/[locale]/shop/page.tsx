import type { Metadata } from "next";

import { shopifyClient } from "@/lib/shopify/client";
import { PRODUCTS_QUERY } from "@/lib/shopify/queries";
import {COLLECTION_BY_HANDLE_QUERY,} from "@/lib/shopify/queries";

import Hero from "@/components/shop/hero/Hero";
import ProductGrid from "@/components/shop/products/ProductGrid";
import CollectionScrollGrid from "@/components/shop/products/CollectionScrollGrid";

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

  const products = data?.products?.nodes ?? [];

  const bestSellers =collectionData?.collection?.products?.nodes ?? [];

  return (
    <>
      <Hero />
      <Container>
        <CollectionScrollGrid handle="best-sellers" heading="Best Sellers" />
        <CollectionScrollGrid handle="preview-all-products" heading="All Products" />
      </Container>
    </>
  );
}