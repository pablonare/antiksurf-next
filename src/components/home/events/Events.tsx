import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import styles from "./Events.module.css";
import heroImage from "@/assets/images/events/atlantik/coveratlantik.webp";

async function Hero() {
  const t = await getTranslations("home.events");

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
          <Link href="/events">
            <h2>{t("title")}</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;