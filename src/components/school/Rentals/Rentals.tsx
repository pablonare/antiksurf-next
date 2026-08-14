import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../ui/Container/Container";
import Section from "../../layout/Section/Section";

import SplitSection from "../../layout/SplitSection/SplitSection";
import RentalsImage from "../../../assets/images/index/rentals.webp";
import RentalPricesImage from "../../../assets/images/index/rentals-prices.webp";
import Button from "../../ui/Button/Button";

import styles from "./Rentals.module.css";

export default async function Rentals() {
  const t = await getTranslations("school.rentals");

  return (
    <Section spacing="lg">
      <Container>
        <SplitSection reverse={false} mobileReverse={true}>

          <div className={styles.media}>
            <Image
              src={RentalsImage}
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>

            <p className="section-subtitle">
              {t("description")}
            </p>

            <Image
              className={styles.contentImage}
              src={RentalPricesImage}
              alt={t("pricesImageAlt")}
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, 500px"
            />

            <div className={styles.actions}>
              <Button
                as="a"
                href="https://wa.me/212644078565"
                variant="primary"
              >
                {t("button")}
              </Button>
            </div>

          </div>

        </SplitSection>
      </Container>
    </Section>
  );
}