import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import trips from "./Trips";
import TripCard from "./components/TripCard";
import Section from "../../../components/layout/Section/Section";

import styles from "./UpcomingTrips.module.css";

export default async function UpcomingTrips() {
  const t = await getTranslations("surftrips.upcomingTrips");

  return (
    <div id="upcoming-trips">
    <Section>
      <Container>

        <p className="section-kicker">
          {t("kicker")}
        </p>

        <h2 className={`section-title ${styles.title}`}>
          {t("title")}
        </h2>

        <div className={styles.grid}>
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              {...trip}
            />
          ))}
          
        </div>

      </Container>
    </Section>
    </div>
  );
}