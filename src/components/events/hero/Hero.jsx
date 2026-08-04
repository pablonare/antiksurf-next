import Container from "../../../components/ui/Container/Container";
import styles from "./Hero.module.css";
import AtlantikCover from "../../../assets/images/events/atlantik/coveratlantik.webp";

function Hero() {
  return (
    <Container>
      <section className={styles.hero}>
          
        <div className={styles.title}>
          <h1 className="section-title">ATLANTIK</h1>
          <h2>Un pequeño film rodado en asilah</h2>
        </div>

        <video
          className={styles.gallery}
          controls
          loop
          playsInline
          poster={AtlantikCover.src}
        >
          <source src="/videos/atlantik.webm" type="video/webm" />
        </video>
        
        
      </section>
    </Container>
  );
}

export default Hero;