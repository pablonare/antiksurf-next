import Image from "next/image";

import styles from "./Hero.module.css";
import heroImage from "../../../assets/images/index/rentals.webp";


function Hero() {
  return (
    <section className={styles.hero}>

      <Image
        src={heroImage}
        alt="Shop"
        priority
        className={styles.background}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>Shop</h1>
        <h2>Coming Soon</h2>
      </div>

    </section>
  );
}

export default Hero;