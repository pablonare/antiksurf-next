import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

import SplitSection from "../../../components/layout/SplitSection/SplitSection";
import RentalsImage from "../../../assets/images/index/rentals.webp";
import RentalPricesImage from "../../../assets/images/index/rentals-prices.webp";
import Button from "../../../components/ui/Button/Button";

import styles from "./Rentals.module.css";

export default async function Rentals() {
  const t = await getTranslations("home.rentals");

  return (
    <Section>
      <Container>
        <SplitSection reverse={false}>

          <div className={styles.media}>
            <img
              src={RentalsImage.src}
              alt={t("imageAlt")}
            />
          </div>

          <div className={styles.content}>

            <h2 className="section-title">
              {t("title")}
            </h2>

            <p className="section-subtitle">
              {t("description")}
            </p>

            <img
              className={styles.contentImage}
              src={RentalPricesImage.src}
              alt={t("pricesImageAlt")}
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