import type { Metadata } from "next";
import Antikriad from "@/components/accommodation/antikriad/Antikriad";
import Apartamento from "@/components/accommodation/apartamento/Apartamento"

import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("accommodation.metadata");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/accommodation",
    },
  };
}

export default function Page() {
  return (
    <>
      <Antikriad />
      <Apartamento />
    </>
  );
}