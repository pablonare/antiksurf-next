import Hero from "@/components/home/Hero/Hero";
import Intro from "@/components/home/Intro/Intro";
import UpcomingTrips from "@/components/home/UpcomingTrips/UpcomingTrips";
import SurfLessons from "@/components/home/SurfLessons/SurfLessons";
import Rentals from "@/components/home/Rentals/Rentals";
import {COLLECTION_BY_HANDLE_QUERY,} from "@/lib/shopify/queries";
import CollectionScrollGrid from "@/components/shop/components/CollectionScrollGrid";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Page() {
  return (
    <>
      <Hero />
      <CollectionScrollGrid handle="preview-all-products" heading="THE SHOP" />
      <CollectionScrollGrid handle="best-sellers" heading="SURF TRIPS" />
    </>
  );
}
