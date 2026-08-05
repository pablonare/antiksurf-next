import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import heroImage from "../../../assets/images/common/surftrips.webp";

import styles from "./Hero.module.css";

export default async function Hero() {
  const t = await getTranslations("surftrips.hero");

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <Container>
        <div className={styles.content}>

          <p className="hero-kicker">
            {t("kicker")}
          </p>

          <h1 className="hero-title">
            {t("title")}
          </h1>

          <p className="hero-subtitle">
            {t("subtitle")}
          </p>

          <div className={styles.actions}>

            <Button href="#upcoming-trips">
              {t("viewTrips")}
            </Button>

            <Button
              as="a"
              href="https://wa.me/212644078565"
              variant="tertiary"
            >
              {t("bookNow")}
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}