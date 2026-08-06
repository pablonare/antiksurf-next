import type { Metadata } from "next";

import Hero from "@/components/events/hero/Hero";
import Content from "@/components/events/content/Content";

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
      <Hero />
      <Content />
    </>
  );
}