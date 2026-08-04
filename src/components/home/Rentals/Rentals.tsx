import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import RentalsImage from "../../../assets/images/index/rentals.webp";
import RentalPricesImage from "../../../assets/images/index/rentals-prices.webp";
import Button from "../../../components/ui/Button/Button";

import styles from "./Rentals.module.css";

function Rentals() {
  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.media}>
            <img 
              src={RentalsImage.src}
              alt="Surfboard rentals in Morocco"
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              Surfboard Rentals
            </h2>

            <p className="section-subtitle">
              We offer a wide range of surfboards for rent, suitable for all skill levels. 
              Our rental service includes high-quality boards, wetsuits, and accessories 
              to ensure you have the best surfing experience.
            </p>
              
            <img
                className={styles.contentImage}
                src={RentalPricesImage.src}
                alt="Surfboard rentals"
            />

            <div className={styles.actions}>
              <Button as="a" href="https://wa.me/212644078565" variant="primary">
                Contact Us 
              </Button>
            </div>

          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}

export default Rentals;