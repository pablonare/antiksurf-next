import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../ui/Container/Container";
import Section from "../../layout/Section/Section";

import quiver1 from "@/assets/images/school/quiver1.webp"
import quiver2 from "@/assets/images/school/quiver2.webp"
import quiver3 from "@/assets/images/school/quiver3.webp"

import styles from "./Quiver.module.css";

export default async function Rentals() {
  const t = await getTranslations("school.quiver");

  return (
    <Section spacing="lg">
      <Container>
          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>

            <p className="section-subtitle">
              {t("description")}
            </p>

          </div>

          <div className={styles.media}>
              <div className={styles.imageWrapper}>
                <Image
                  src={quiver1}
                  alt={t("imageAlt")}
                  fill
                  sizes="33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={quiver2}
                  alt={t("imageAlt")}
                  fill
                  sizes="33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={quiver3}
                  alt={t("imageAlt")}
                  fill
                  sizes="33vw"
                  className={styles.image}
                />
              </div>
            </div>
      </Container>
    </Section>
  );
}