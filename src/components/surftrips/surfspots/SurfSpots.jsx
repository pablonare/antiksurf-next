import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../../components/ui/Container/Container";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import Section from "../../../components/layout/Section/Section";
import Toggle from "../../../components/ui/toggle/Toggle";

import surfSpotsImage from "../../../assets/images/surftrips/surf spots/surf-spots.webp";

import styles from "./SurfSpots.module.css";

export default async function SurfSpots() {
  const t = await getTranslations("surftrips.surfSpots");

  return (
    <Section spacing="sm">
      <Container>
        <Toggle title={t("title")}>
          <SplitSection reverse={false}>
            <div className={styles.content}>
              <p className="section-subtitle">
                {t("description1")}
              </p>

              <p className="section-subtitle">
                {t("description2")}
              </p>
            </div>

            <div className={styles.media}>
              <Image
                className={styles.image}
                src={surfSpotsImage}
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SplitSection>
        </Toggle>
      </Container>
    </Section>
  );
}