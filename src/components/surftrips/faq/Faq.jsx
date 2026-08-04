import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import Accordion from "../../../components/ui/Accordion/Accordion";
import styles from "./Faq.module.css";

const faqItems = [
  {
    title: "What is included in Antik surf trips?",
    content: [
      "Accommodation, breakfast, lunch and dinner, surf lessons, cultural experiences, underwater photography, transportation to all beaches and surf equipment.",
    ],
  },
  {
    title: "Are the trips suitable for all levels?",
    content: [
      "Yes. Antik works with a variety of surf spots, boards and daily spot selection so beginners and more experienced surfers can both enjoy the trip.",
    ],
  },
  {
    title: "How do I reserve my spot?",
    content: [
      "A 50% deposit in advance is required for reservations. The remaining planning details are shared with participants before the trip.",
    ],
  },
  {
    title: "How do I get to Asilah?",
    content: [
      "You can arrive by flight to Tangier plus taxi to Asilah, or by ferry to Tangier plus taxi to Asilah.",
    ],
  },
  {
    title: "What happens before the trip starts?",
    content: [
      "About two weeks before departure, Antik creates a WhatsApp group with detailed planning, schedules, recommendations and a first introduction to the group.",
    ],
  },
  {
    title: "What is not included?",
    content: [
      "Travel to and from Morocco, travel or medical insurance and alcoholic beverages are not included.",
    ],
  },
];

function Faq() {
  return (
    <Section>
      <Container>
        <header className={styles.header}>
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Everything you need before booking</h2>
        </header>

        <Accordion items={faqItems} />
      </Container>
    </Section>
  );
}

export default Faq;
