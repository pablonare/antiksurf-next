import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";
import Accordion from "../../../components/ui/Accordion/Accordion";

import { getTranslations } from "next-intl/server";

import styles from "./Faq.module.css";


export default async function Faq() {

  const t = await getTranslations("surftrips.faq");

  const rawFaqItems = t.raw("items");
  const faqItems = (Array.isArray(rawFaqItems) ? rawFaqItems : []).map((item) => ({
    ...item,
    content: Array.isArray(item?.content)
      ? item.content
      : item?.content
        ? [item.content]
        : []
  }));


  return (
    <Section spacing="xlg">
      <Container>

        <header className={styles.header}>
          <p className="section-kicker">
            {t("kicker")}
          </p>

          <h2 className="section-title">
            {t("title")}
          </h2>
        </header>


        <Accordion items={faqItems} />

      </Container>
    </Section>
  );
}