import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import ctaImage from "../../../assets/images/surftrips/cta/cta.webp";

import { getTranslations } from "next-intl/server";

import styles from "./Cta.module.css";


export default async function Cta() {

  const t = await getTranslations("surftrips.cta");


  return (
    <section
      className={styles.cta}
      style={{ backgroundImage: `url(${ctaImage.src})` }}
    >

      <Container>

        <div className={styles.content}>

          <p className="hero-kicker">
            {t("kicker")}
          </p>


          <h2 className="hero-title">
            {t("title")}
          </h2>


          <p className="hero-subtitle">
            {t("description")}
          </p>


          <div className={styles.actions}>

            <Button 
              as="a" 
              href="https://wa.me/212644078565" 
              variant="tertiary"
            >
              {t("button")}
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}