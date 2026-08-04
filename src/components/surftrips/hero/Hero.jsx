import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import heroImage from "../../../assets/images/common/surftrips.webp";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage.src})` }}>
      <Container>
        <div className={styles.content}>

          <p className="hero-kicker">
            Antik Surf Club Presents
          </p>

          <h1 className="hero-title">
            Surf Trips in Asilah, Morocco
          </h1>

          <p className="hero-subtitle">
            Small groups • Local guides • Surf, culture & unforgettable
            experiences.
          </p>

          <div className={styles.actions}>

            <Button href="#upcoming-trips">
              View Trips
            </Button>

            <Button as="a" href="https://wa.me/212644078565" variant="tertiary">
              Book Now
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Hero;