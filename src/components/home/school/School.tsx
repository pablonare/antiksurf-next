import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import styles from "./School.module.css";
import heroImage from "@/assets/images/index/lessons.webp";

async function Hero() {
  const t = await getTranslations("home.school");

  return (
    <section className={styles.section}>
      <div className={styles.media}>
        <Image
          src={heroImage}
          alt="Antik Surf Club"
          className={styles.image}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <Link href="/school">
            <h2>{t("school")}</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;