import styles from "./Hero.module.css";

function Hero() {
  return (
    <video
      className={styles.gallery}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source
        src="/videos/88.webm"
        type="video/webm"
      />
    </video>
  );
}

export default Hero;