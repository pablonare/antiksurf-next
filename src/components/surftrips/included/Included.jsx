import { getTranslations } from "next-intl/server";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

import styles from "./Included.module.css";

export default async function Included() {
  const t = await getTranslations("surftrips.included");

  const includedItems = [
    t("items.accommodation"),
    t("items.meals"),
    t("items.transport"),
    t("items.surf"),
    t("items.studio"),
    t("items.experiences"),
  ];

  const notIncludedItems = [
    t("notIncluded.items.flights"),
    t("notIncluded.items.alcohol"),
    t("notIncluded.items.insurance"),
  ];

  return (
    <Section>
      <Container>

        <header className="section-title">
          <h2>{t("title")}</h2>
        </header>

        <ul className={styles.list}>
          {includedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <aside className={styles.list}>
          <p className={styles.kicker}>
            {t("notIncluded.title")}
          </p>

          <h3 className={styles.subtitle}>
            {t("notIncluded.subtitle")}
          </h3>

          <ul className={styles.list}>
            {notIncludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

      </Container>
    </Section>
  );
}
