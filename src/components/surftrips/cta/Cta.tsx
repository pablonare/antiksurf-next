import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import ctaImage from "../../../assets/images/surftrips/cta/cta.webp";

import styles from "./Cta.module.css";

function Cta() {
  return (
    <section
      className={styles.cta}
      style={{ backgroundImage: `url(${ctaImage.src})` }}
    >
      <Container>
        <div className={styles.content}>

          <p className="hero-kicker">
            Limited Spots
          </p>

          <h2 className="hero-title">
            Ready for your next surf adventure?
          </h2>

          <p className="hero-subtitle">
            Book your place, join the WhatsApp planning group and start your
            Antik surf trip before you even arrive in Asilah.
          </p>

          <div className={styles.actions}>
            <Button as="a" href="https://wa.me/212644078565" variant="tertiary">
              Book Your Spot
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Cta;
