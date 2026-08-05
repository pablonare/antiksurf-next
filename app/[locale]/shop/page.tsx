import type { Metadata } from "next";

import Hero from "@/components/shop/hero/Hero";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop the Antik Surf Club selection of surf-inspired products, gear and essentials.",
  alternates: {
    canonical: "/shop",
  },
};

export default function Page() {
  return <Hero />;
}