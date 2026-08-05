import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import studioImage from "../../../assets/images/surftrips/classic-studio/classic-studio.webp";

import styles from "./Studio.module.css";


export default async function Studio() {

  const t = await getTranslations("surftrips.studio");


  return (
    <Section>
      <Container>

        <SplitSection reverse={false}>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>


            <p className="section-subtitle">
              {t("description")}
            </p>


          </div>


          <div className={styles.media}>

            <img
              className={styles.image}
              src={studioImage.src}
              alt={t("imageAlt")}
            />

          </div>


        </SplitSection>

      </Container>
    </Section>
  );
}