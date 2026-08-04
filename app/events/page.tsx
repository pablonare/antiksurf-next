import type { Metadata } from "next";

import Hero from "@/components/events/hero/Hero";
import Content from "@/components/events/content/Content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Antik Surf Club events, gatherings and collaborations around surf culture, people and places.",
  alternates: {
    canonical: "/events",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}