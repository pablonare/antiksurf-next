import type { Metadata } from "next";

import Hero from "@/components/lessonsrentals/Hero/Hero";
import SurfLessons from "@/components/lessonsrentals/SurfLessons/SurfLessons";
import Rentals from "@/components/lessonsrentals/Rentals/Rentals";

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
    </>
  );
}