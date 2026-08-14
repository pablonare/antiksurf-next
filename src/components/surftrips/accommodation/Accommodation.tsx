import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "@/components/ui/Container/Container";
import Section from "@/components/layout/Section/Section";
import Toggle from "@/components/ui/toggle/Toggle";

import accommodation1 from "../../../assets/images/surftrips/accommodation/accommodation_1.webp";
import accommodation2 from "../../../assets/images/surftrips/accommodation/accommodation_2.webp";
import accommodation3 from "../../../assets/images/surftrips/accommodation/accommodation_3.webp";
import accommodation4 from "../../../assets/images/surftrips/accommodation/accommodation_4.webp";

import styles from "./Accommodation.module.css";

export default async function Accommodation() {
  const t = await getTranslations("surftrips.accommodation");

  const images = [
    {
      src: accommodation1,
      alt: t("image1Alt"),
    },
    {
      src: accommodation2,
      alt: t("image2Alt"),
    },
    {
      src: accommodation3,
      alt: t("image3Alt"),
    },
    {
      src: accommodation4,
      alt: t("image4Alt"),
    },
  ];

  return (
    <Section spacing="sm">
      <Container>
        <Toggle title={t("title")}>
          <p className="section-subtitle">
            {t("description")}
          </p>

          <div className={styles.gallery}>
            {images.map((image, index) => (
              <div key={index} className={styles.card}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 90vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Toggle>
      </Container>
    </Section>
  );
}