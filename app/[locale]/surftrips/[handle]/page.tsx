import { shopifyClient } from "@/lib/shopify/client";
import { PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify/queries";
import { notFound } from "next/navigation";
import SurftripDetail from "@/components/surftrips/surftripdetail/SurfrTripDetail";

export default async function SurftripPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  const { data } = await shopifyClient.request(PRODUCT_BY_HANDLE_QUERY, {
    variables: { handle },
  });

  if (!data?.product) notFound();

  return <SurftripDetail product={data.product} />;
}