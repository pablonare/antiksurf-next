import Container from "../../../components/ui/Container/Container";
import styles from "./Hero.module.css";
import AtlantikCover from "../../../assets/images/events/atlantik/coveratlantik.webp";

import { getTranslations } from "next-intl/server";


export default async function Hero() {

  const t = await getTranslations("events.hero");


  return (
    <Container>

      <section className={styles.hero}>
          
        <div className={styles.title}>

          <h1 className="section-title">
            {t("title")}
          </h1>

          <h2>
            {t("subtitle")}
          </h2>

        </div>


        <video
          className={styles.gallery}
          controls
          loop
          playsInline
          poster={AtlantikCover.src}
        >

          <source 
            src="/videos/atlantik.webm" 
            type="video/webm" 
          />

        </video>

      </section>

    </Container>
  );
}