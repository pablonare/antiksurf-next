import styles from "./Hero.module.css";
import heroImage from "@/assets/images/index/hero.webp";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
    </section>
  );
}

export default Hero;