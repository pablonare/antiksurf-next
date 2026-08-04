import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import styles from "./Included.module.css";

function Included() {
  return (
    <Section>
      <Container>
        <header className="section-title">
          <h2>What's Included</h2>
        </header>

        <ul className={styles.list}>
          <li>Accommodation</li>
          <li>Meals (breakfast, lunch and dinner) </li>
          <li>Beach Transport</li>
          <li>Surf Lessons & Equipment</li>
          <li>Classic Studio</li>
          <li>Local Experiences</li>
        </ul>

        <aside className={styles.list}>
        <p className={styles.kicker}>Not Included</p>
          <h3 className={styles.subtitle}>Plan these separately</h3>

          <ul className={styles.list}>
            <li>Flights or ferry to Morocco</li>
            <li>Alcoholic beverages</li>
            <li>Medical / travel insurance</li>
          </ul>

        </aside>
      </Container>
    </Section>
  );
}

export default Included;