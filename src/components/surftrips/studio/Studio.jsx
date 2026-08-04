import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import studioImage from "../../../assets/images/surftrips/classic-studio/classic-studio.webp";

import styles from "./Studio.module.css";

function Studio() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.content}>

            <h2 className="section-title">
              Classic Studio
            </h2>

            <p className="section-subtitle">
              Capture the experience.<br></br><br></br> 
              Issam from Classic Studio is part of our team and joins us 
              throughout the trip alongside our surf coaches. He'll be capturing 
              the best moments in and out of the water, so you'll head home with 
              professional photos and videos of an unforgettable trip

            </p>

          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={studioImage.src}
              alt="Issam from Classic Studio"
            />
          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Studio;
