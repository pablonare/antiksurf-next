import { PRODUCTS_BY_TYPE_QUERY } from "@/lib/shopify/queries";
import { shopifyClient } from "@/lib/shopify/client";
import ProductsScrollGrid from "@/components/shop/components/ScrollGrid/ProductsScrollGrid";

export default async function CollectionScrollGrid({
  handle,
  heading,
  first = 15,
}: {
  handle: string;
  heading: string;
  first?: number;
}) {
  const { data } = await shopifyClient.request(PRODUCTS_BY_TYPE_QUERY, {
    variables: { handle, first },
  });

  const products = data?.collection?.products?.nodes ?? [];

  return <ProductsScrollGrid heading={heading} products={products} />;
}