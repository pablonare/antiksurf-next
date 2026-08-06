import Image from "next/image";

import styles from "./Hero.module.css";
import heroImage from "@/assets/images/index/hero.webp";

function Hero() {
  return (
    <section className={styles.hero}>

      <Image
        src={heroImage}
        alt="Antik Surf Club"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

    </section>
  );
}

export default Hero;