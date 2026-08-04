import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import equipmentImage from "../../../assets/images/surftrips/equipment/equipment.webp";

import styles from "./Equipment.module.css";

function Equipment() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.content}>

            <h2 className="section-title">
              Surf Lessons &amp; Equipment
            </h2>

            <p className="section-subtitle">
              At the club, we have an excellent quiver with a variety of
              surfboards suited to all levels. Whether you are a beginner or
              advanced, we have fun and diverse boards designed to maximize
              your time in the water.
            </p>

            <p className="section-subtitle">
              Our team is always available to help you choose the best option
              according to the conditions and your skill level. Lessons take
              place in the mornings when conditions are best so everyone can
              practice technique. In the afternoons, it is free surfing time,
              where you can practice what you have learned and try new
              things.
            </p>

          </div>

          <div className={styles.media}>
            <img
              src={equipmentImage.src}
              alt="Surf equipment at the club"
            />
          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Equipment;
