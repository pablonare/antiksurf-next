import Container from "../../ui/Container/Container";
import Section from "../../layout/Section/Section";

import SplitSection from "../../layout/SplitSection/SplitSection";
import surftripsImage from "../../../assets/images/common/surftrips.webp";
import Button from "../../ui/Button/Button";
import Link from "next/link";

import trips from "./Trips";
import styles from "./UpcomingTrips.module.css";

function UpcomingTrips() {
  console.log(trips[0]);

  return (
    <Section>
      <Container>
        <SplitSection>
          <div className={styles.media}>
            <img 
              src={surftripsImage.src} 
              alt="Surf trips in Asilah Morocco" 
            />
          </div>

          <div className={styles.content}>
            <h2 className="section-title">
              Upcoming Surftrips 2026
            </h2>

            <p className="section-subtitle">
              Join our Surf Trips in Asilah, Morocco
            </p>

            <p className={styles.label}>
              Dates
            </p>

            <div className={styles.tripList}>
                {trips.map((trip) => (
                  <p key={trip.id} className={styles.trip}>
                    <span className={styles.date}>
                      {trip.dates}
                    </span>

                    {" | "}

                    {trip.name}

                    {" | "}

                    <span
                      className={`${styles.status} ${
                        trip.status === "Full"
                          ? styles.full
                          : styles.available
                      }`}
                    >
                      {trip.status}
                    </span>
                  </p>
                ))}

                <div className={styles.actions}>
                  
                  <Button as={Link} href="/surftrips" variant="secondary">
                    View All Trips
                  </Button>

                  <Button as="a" href="https://wa.me/212644078565" variant="primary">
                    Book Now 
                  </Button>
                  
                </div>
              </div>
          </div>
        </SplitSection>
      </Container>
    </Section>
  );
}

export default UpcomingTrips;