import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "@/components/ui/Container/Container";
import Section from "@/components/layout/Section/Section";


import riad1 from "../../../assets/images/accommodation/antikriad1.webp";
import riad2 from "../../../assets/images/accommodation/antikriad2.webp";
import riad3 from "../../../assets/images/accommodation/antikriad3.webp";
import riad4 from "../../../assets/images/accommodation/antikriad4.webp";
import riad5 from "../../../assets/images/accommodation/antikriad5.webp";
import riad6 from "../../../assets/images/accommodation/antikriad6.webp";
import riad7 from "../../../assets/images/accommodation/antikriad7.webp";
import riad8 from "../../../assets/images/accommodation/antikriad8.webp";
import riad9 from "../../../assets/images/accommodation/antikriad9.webp";

import Button from "../../ui/Button/Button";

import styles from "./Antikriad.module.css";

export default async function Accommodation() {
  const t = await getTranslations("accommodation.antikriad");

  const images = [
    {
      src: riad4,
      alt: t("imageAlt"),
    },
    {
      src: riad1,
      alt: t("imageAlt"),
    },
    {
      src: riad5,
      alt: t("imageAlt"),
    },
    {
      src: riad3,
      alt: t("imageAlt"),
    },
    {
      src: riad8,
      alt: t("imageAlt"),
    },
    {
      src: riad2,
      alt: t("imageAlt"),
    },
    {
      src: riad6,
      alt: t("imageAlt"),
    },
    {
      src: riad7,
      alt: t("imageAlt"),
    },
    {
      src: riad9,
      alt: t("imageAlt"),
    }
  ];

  return (
    <Section spacing="sm">
      <Container>
          <div className={styles.title}>

            <h2 className="section-title">
              {t("title")} 
            </h2>
            
          </div>

          <div className="section-subtitle">
            <p>{t("description.paragraph1")}</p>
          </div>

          <div className="section-subtitle">
            <p>{t("description.paragraph2")}</p>
          </div>
          
          <div className="section-subtitle">
            <p>{t("description.paragraph3")}</p>
          </div>

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

          <div className={styles.actions}>
            <Button
                as="a"
                href="https://wa.me/212644078565"
                variant="primary"
              >
                {t("button")}
            </Button>
          </div>

      </Container>
    </Section>
  );
}