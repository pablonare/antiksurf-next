import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import equipmentImage from "../../../assets/images/surftrips/equipment/equipment.webp";

import styles from "./Equipment.module.css";


export default async function Equipment() {

  const t = await getTranslations("surftrips.equipment");


  return (
    <Section>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>


            <p className="section-subtitle">
              {t("description")}
            </p>


            <p className="section-subtitle">
              {t("description2")}
            </p>

          </div>


          <div className={styles.media}>

            <img
              src={equipmentImage.src}
              alt={t("imageAlt")}
            />

          </div>

        </SplitSection>

      </Container>
    </Section>
  );
}