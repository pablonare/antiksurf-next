import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import SplitSection from "../../../components/layout/SplitSection/SplitSection";

import discoverImage from "../../../assets/images/surftrips/discover/discover-asilah.webp";

import styles from "./Discover.module.css";


export default async function Discover() {

  const t = await getTranslations("surftrips.discover");


  return (
    <Section>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>


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

      </Container>
    </Section>
  );
}