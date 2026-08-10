import Hero from "@/components/home/Hero/Hero";
import Intro from "@/components/home/Intro/Intro";
import UpcomingTrips from "@/components/home/UpcomingTrips/UpcomingTrips";
import SurfLessons from "@/components/home/SurfLessons/SurfLessons";
import Rentals from "@/components/home/Rentals/Rentals";
import CollectionScrollGrid from "@/components/shop/components/CollectionScrollGrid";
import TypeScrollGrid from "@/components/shop/components/TypeScrollGrid";

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
      <TypeScrollGrid type="snowboard" heading="THE SHOP >" headingHref="/shop" />
      <TypeScrollGrid type="surftrip" heading="SURF TRIPS >"  headingHref="/surftrips"/>
    </>
  );
}
