import Hero from "@/components/home/Hero/Hero";
import Intro from "@/components/home/Intro/Intro";
import UpcomingTrips from "@/components/home/UpcomingTrips/UpcomingTrips";
import SurfLessons from "@/components/home/SurfLessons/SurfLessons";
import Rentals from "@/components/home/Rentals/Rentals";

export const metadata = {
  title: "Antik Surf Club | Surf Club in Asilah, Morocco",
  description:
    "Surf lessons, surf trips and unforgettable experiences in Asilah, Morocco.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <UpcomingTrips />
      <SurfLessons />
      <Rentals />
    </>
  );
}
