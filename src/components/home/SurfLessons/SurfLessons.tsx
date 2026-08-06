import { getTranslations } from "next-intl/server";

import Container from "../../ui/Container/Container";
import SplitSection from "../../layout/SplitSection/SplitSection";
import LessonsImage from "../../../assets/images/index/lessons.webp";
import Button from "../../ui/Button/Button";

import lessons from "./lessons";
import Accordion from "../../ui/Accordion/Accordion";
import styles from "./SurfLessons.module.css";

export default async function SurfLessons() {
  const t = await getTranslations("home.surfLessons");

  const translatedLessons = lessons.map((lesson) => ({
    title: t(lesson.title),
    content: lesson.content.map((item) => t(item)),
  }));

  return (
    <section className={styles.section}>
      <Container>

        <SplitSection reverse={true}>

          <div className={styles.media}>
            <img
              src={LessonsImage.src}
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


            <Accordion items={translatedLessons} />


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
    </section>
  );
}