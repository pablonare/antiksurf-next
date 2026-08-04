import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import Section from "../../../components/layout/Section/Section";

import surfSpotsImage from "../../../assets/images/surftrips/surf spots/surf-spots.webp";

import styles from "./SurfSpots.module.css";

function SurfSpots() {
  return (
    <Section>
      <Container>
        <SplitSection reverse={false}>

          <div className={styles.content}>
            <header className="section-title">
              <h2>Surf Spots</h2>
            </header>

            <p className="section-subtitle">
              Surf the best conditions every day.<br></br><br></br>
              Every morning, we'll check the waves at the beach right in front 
              of the surf club. If the conditions are good, that's where we'll surf.
              If another spot is working better, we'll jump in the van and head there 
              instead. We keep an eye on the swell, wind and tides every day, 
              so you're always surfing the best conditions available,not just 
              sticking to the same beach.
            </p>
          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={surfSpotsImage.src}
              alt="Traditional house Dhar Ambrossia in Asilah Medina"
            />
          </div>
          
        </SplitSection>
      </Container>
    </Section>
  );
}

export default SurfSpots;