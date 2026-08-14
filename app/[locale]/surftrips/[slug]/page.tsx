import { notFound } from "next/navigation";

import trips from "@/components/surftrips/upcomingtrips/Trips";
import SurftripDetails from "@/components/surftrips/surftripdetails/SurftripsDetails";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function SurftripPage({ params }: Props) {
  const { slug } = await params;

  const trip = trips.find((trip) => trip.slug === slug);

  if (!trip) {
    notFound();
  }

  return <SurftripDetails trip={trip} />;
}