import type { Metadata } from "next";

import Hero from "@/components/school/Hero/Hero";
import SurfLessons from "@/components/school/SurfLessons/SurfLessons";
import Rentals from "@/components/school/Rentals/Rentals";
import Quiver from "@/components/school/Quiver/Quiver"

import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.metadata");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/events",
    },
  };
}

export default function Page() {
  return (
    <>
      <Hero/>
      <SurfLessons />
      <Rentals />
      <Quiver/>
    </>
  );
}