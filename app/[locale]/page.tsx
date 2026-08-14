import Hero from "@/components/home/Hero/Hero";
import UpcomingTrips from "@/components/surftrips/upcomingtrips/UpcomingTrips";
import School from "@/components/home/school/School"

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
      <UpcomingTrips />
      <School />
    </>
  );
}
