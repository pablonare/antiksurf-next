import type { Metadata } from "next";

import SurfLessons from "@/components/home/SurfLessons/SurfLessons";
import Rentals from "@/components/home/Rentals/Rentals";

import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("events.metadata");

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
      <SurfLessons />
      <Rentals />
    </>
  );
}