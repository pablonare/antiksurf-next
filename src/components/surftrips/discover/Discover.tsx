import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import discoverImage from "../../../assets/images/surftrips/discover/discover-asilah.webp";

import styles from "./Discover.module.css";

function Discover() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.content}>

            <h2 className="section-title">
              Discover Asilah
            </h2>

            <p className="section-subtitle">
              A quiet Atlantic town with art, flavour and strong character.<br></br>
              <br></br>
              Asilah is a small fishing town just 45 km from Tangier, where 
              life moves at a slower pace. Its whitewashed medina, colourful 
              street murals and ocean views make it a place you'll want to explore 
              long after you've left the beach.<br></br>
              <br></br>
              After surfing, you can wander through its narrow streets, stop for a 
              coffee in the main square, enjoy fresh fish by the sea or simply watch 
              the sunset over the Atlantic. It's peaceful, authentic and full of 
              character, the kind of place that turns a surf trip into a complete experience.
            </p>
          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={discoverImage.src}
              alt="Textures and architecture in Asilah"
            />
          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Discover;
