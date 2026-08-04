import type { Metadata } from "next";

import Hero from "@/components/surftrips/hero/Hero";
import UpcomingTrips from "@/components/surftrips/upcomingtrips/UpcomingTrips";
import Included from "@/components/surftrips/included/Included";
import Accommodation from "@/components/surftrips/accommodation/Accommodation";
import SurfSpots from "@/components/surftrips/surfspots/SurfSpots";
import Equipment from "@/components/surftrips/equipment/Equipment";
import Studio from "@/components/surftrips/studio/Studio";
import Discover from "@/components/surftrips/discover/Discover";
import Faq from "@/components/surftrips/faq/Faq";
import Cta from "@/components/surftrips/cta/Cta";

export const metadata: Metadata = {
  title: "Surf Trips in Asilah, Morocco",
  description:
    "Surf trips in Asilah, Morocco with small groups, local guides, accommodation, surf lessons, cultural experiences and direct booking via Antik Surf Club.",
  alternates: {
    canonical: "/surftrips",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <UpcomingTrips />
      <Included />
      <Accommodation />
      <SurfSpots />
      <Equipment />
      <Studio />
      <Discover />
      <Faq />
      <Cta />
    </>
  );
}