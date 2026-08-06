import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

import accommodation1 from "../../../assets/images/surftrips/accommodation/accommodation_1.webp";
import accommodation2 from "../../../assets/images/surftrips/accommodation/accommodation_2.webp";
import accommodation3 from "../../../assets/images/surftrips/accommodation/accommodation_3.webp";
import accommodation4 from "../../../assets/images/surftrips/accommodation/accommodation_4.webp";

import styles from "./Accommodation.module.css";

export default async function Accommodation() {
  const t = await getTranslations("surftrips.accommodation");

  return (
    <Section>
      <Container>
        <h2 className="section-title">
          {t("title")}
        </h2>

        <p className="section-subtitle">
          {t("description")}
        </p>

        <div className={styles.gallery}>
          <img
            className={styles.image}
            src={accommodation1.src}
            alt={t("image1Alt")}
          />

          <img
            className={styles.image}
            src={accommodation2.src}
            alt={t("image2Alt")}
          />

          <img
            className={styles.image}
            src={accommodation3.src}
            alt={t("image3Alt")}
          />

          <img
            className={styles.image}
            src={accommodation4.src}
            alt={t("image4Alt")}
          />
        </div>
      </Container>
    </Section>
  );
}