import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import Section from "../../../components/layout/Section/Section";

import surfSpotsImage from "../../../assets/images/surftrips/surf spots/surf-spots.webp";

import styles from "./SurfSpots.module.css";


export default async function SurfSpots() {

  const t = await getTranslations("surftrips.surfSpots");


  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.content}>

            <header className="section-title">
              <h2>
                {t("title")}
              </h2>
            </header>


            <p className="section-subtitle">
              {t("description1")}
            </p>

            <p className="section-subtitle">
              {t("description2")}
            </p>

          </div>


          <div className={styles.media}>

            <img
              className={styles.image}
              src={surfSpotsImage.src}
              alt={t("imageAlt")}
            />

          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}