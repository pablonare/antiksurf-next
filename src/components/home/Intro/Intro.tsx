import styles from "./Intro.module.css";
import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

function Intro() {
  return (
      <Section className={styles.intro}>
        <Container>
          <p>
            Antik Surf Club is situated in the heart of the Asilah medina,
            close to some of the best surf spots in the north of Morocco.
            At Antik, you'll find surf lessons, action-packed boards,
            and surf trips that take you straight to the essence.
          </p>
        </Container>
      </Section>
  );
}

export default Intro;