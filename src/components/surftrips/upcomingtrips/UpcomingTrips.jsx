import Container from "../../../components/ui/Container/Container";
import trips from "./Trips";
import TripCard from "./components/TripCard";
import Section from "../../../components/layout/Section/Section";
import styles from "./UpcomingTrips.module.css";

function UpcomingTrips() {
  return (
    <Section> 
      <Container>

        <p className="section-kicker">
          Upcoming Surf Trips
        </p>

        <h2 className={`section-title ${styles.title}`}>
          Choose your dates and secure your spot early
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
  );
}

export default UpcomingTrips;