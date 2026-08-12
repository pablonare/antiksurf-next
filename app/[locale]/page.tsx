import Hero from "@/components/home/Hero/Hero";
import TypeScrollGrid from "@/components/shop/components/TypeScrollGrid";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SurfTripsScrollGrid from "@/components/surftrips/surftripscrollgrid/SurftripsScrollGrid";

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
      <SurfTripsScrollGrid heading="SURF TRIPS >"  headingHref="/surftrips"/>
      <TypeScrollGrid type="tienda" heading="THE SHOP >" headingHref="/shop" />
    </>
  );
}
