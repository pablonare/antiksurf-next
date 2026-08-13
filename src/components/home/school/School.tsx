import Image from "next/image";
import Link from "next/link";

import styles from "./School.module.css";
import heroImage from "@/assets/images/index/lessons.webp";

function Hero() {
  return (
    <section className={styles.section}> 
      <div className={styles.media}>

        <div className={styles.content}>
          <Link href="/school">
            <h2>Lessons & Rentals</h2>
          </Link>
        </div>

        <Image
          src={heroImage}
          alt="Antik Surf Club"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
    </section>
  );
}

export default Hero;