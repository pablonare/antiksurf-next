import {getTranslations} from "next-intl/server";

import Container from "../../ui/Container/Container";
import Section from "../../layout/Section/Section";

import SplitSection from "../../layout/SplitSection/SplitSection";
import surftripsImage from "../../../assets/images/common/surftrips.webp";
import Button from "../../ui/Button/Button";

import {Link} from "@/i18n/navigation";

import trips from "./Trips";
import styles from "./UpcomingTrips.module.css";

export default async function UpcomingTrips() {
  const t = await getTranslations("home.upcomingTrips");

  return (
    <Section>
      <Container>
        <SplitSection>

          <div className={styles.media}>
            <img
              src={surftripsImage.src}
              alt={t("imageAlt")}
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>

            <p className="section-subtitle">
              {t("subtitle")}
            </p>

            <p className={styles.label}>
              {t("dates")}
            </p>

            <div className={styles.tripList}>
              {trips.map((trip) => (
                <p key={trip.id} className={styles.trip}>
                  <span className={styles.date}>{t(trip.dates)}</span>

                  {" | "}

                  {t(trip.name)}

                  {" | "}

                  <span
                    className={`${styles.status} ${
                      trip.status === "full"
                        ? styles.full
                        : styles.available
                    }`}
                  >
                    {t(trip.status)}
                  </span>
                </p>
              ))}

              <div className={styles.actions}>

                <Button
                  as={Link}
                  href="/surftrips"
                  variant="secondary"
                >
                  {t("viewTrips")}
                </Button>

                <Button
                  as="a"
                  href="https://wa.me/212644078565"
                  variant="primary"
                >
                  {t("bookNow")}
                </Button>

              </div>
            </div>

          </div>

        </SplitSection>
      </Container>
    </Section>
  );
}