import Image from "next/image";

import Container from "../../../components/ui/Container/Container";
import styles from "./Content.module.css";

import AtlantikImage1 from "../../../assets/images/events/atlantik/atlantik-1.webp";
import AtlantikImage2 from "../../../assets/images/events/atlantik/atlantik-2.webp";

import AtlantikAsilah from "../../../assets/images/events/atlantik/atlantik-asilah.webp";
import AtlantikCanos from "../../../assets/images/events/atlantik/atlantik-canos.webp";
import AtlantikHendaya from "../../../assets/images/events/atlantik/atlantik-hendaya.webp";

import { getTranslations } from "next-intl/server";


export default async function Content() {

  const t = await getTranslations("events.content");


  return (
    <Container>

      <div className={styles.content}>
        <p>{t("paragraph1")}</p>
      </div>


      <div className={styles.media}>

        <Image
          src={AtlantikAsilah}
          alt="Atlantik Asilah"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <Image
          src={AtlantikCanos}
          alt="Atlantik Caños"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <Image
          src={AtlantikHendaya}
          alt="Atlantik Hendaya"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

      </div>


      <div className={styles.content}>
        <p>{t("paragraph2")}</p>
      </div>


      <div className={styles.content}>
        <p>{t("paragraph3")}</p>
      </div>


      <div className={styles.final}>
        <p>
          {t("final")}
        </p>
      </div>


      <div className={styles.gallery}>

        <Image
          src={AtlantikImage2}
          alt="Shapers meeting"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <Image
          src={AtlantikImage1}
          alt="Shapers meeting"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

      </div>


    </Container>
  );
}