import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import Toggle from "../../../components/ui/toggle/Toggle";

import discoverImage from "../../../assets/images/surftrips/discover/discover-asilah.webp";

import styles from "./Discover.module.css";

export default async function Discover() {
  const t = await getTranslations("surftrips.discover");

  return (
    <Section spacing="sm">
      <Container>
        <Toggle title={t("title")}>
          <SplitSection reverse={true}>
            <div className={styles.content}>
              <p className="section-subtitle">
                {t("description1")}
              </p>

              <p className="section-subtitle">
                {t("description2")}
              </p>

              <p className="section-subtitle">
                {t("description3")}
              </p>
            </div>

            <div className={styles.media}>
              <Image
                className={styles.image}
                src={discoverImage}
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