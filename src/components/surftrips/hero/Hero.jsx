import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";

import heroImage from "../../../assets/images/common/surftrips.webp";

import styles from "./Hero.module.css";


export default async function Hero() {
  const t = await getTranslations("surftrips.hero");

  return (
    <section className={styles.hero}>

      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      <div className={styles.overlay} />

      <Container>
        <div className={styles.content}>

          <p className="hero-kicker">
            {t("kicker")}
          </p>

          <h1 className="hero-title">
            {t("title")}
          </h1>

          <p className="hero-subtitle">
            {t("subtitle")}
          </p>

        </div>
      </Container>

    </section>
  );
}