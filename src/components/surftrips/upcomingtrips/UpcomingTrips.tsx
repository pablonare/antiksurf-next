import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import Container from "../../ui/Container/Container";
import trips from "./Trips";
import TripCard from "./components/TripCard";
import Section from "../../layout/Section/Section";

import styles from "./UpcomingTrips.module.css";

type UpcomingTripsProps = {
  titleHref?: string;
  titleKey?: string;
};

export default async function UpcomingTrips({
  titleHref,
}: UpcomingTripsProps) {
  const t = await getTranslations("surftrips.upcomingTrips");

  const title = (
    <h2 className={`section-title ${styles.title}`}>
      {t("title")}
    </h2>
  );

  return (
    <div id="upcoming-trips">
      <Section spacing="lg">
        <Container>

          {titleHref ? (
            <Link href={titleHref} className={styles.titleLink}>
              {title}
            </Link>
          ) : (
            title
          )}

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