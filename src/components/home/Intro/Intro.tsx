import { getTranslations } from "next-intl/server";
import styles from "./Intro.module.css";
import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

export default async function Intro() {
  const t = await getTranslations("home.intro");
  
  return (
    <Section className={styles.intro}>
      <Container>
        <p>{t("description")}</p>
      </Container>
    </Section>
  );
}

