import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Button from "../../../../components/ui/Button/Button";
import styles from "./TripCard.module.css";

export default async function TripCard({
  image,
  alt,
  date,
  title,
  price,
  meta,
  status,
  buttonText,
  buttonLink,
}) {
  const t = await getTranslations("surftrips.upcomingTrips");

  return (
    <article className={styles.card}>

      <div className={styles.imageCard}>
        <Image
          className={styles.image}
          src={image}
          alt={t(alt)}
          fill
          sizes="(max-width: 768px) 90vw, 25vw"
        />
      </div>

      <div className={styles.body}>

        <h3 className={styles.title}>
          {t(title)}
        </h3>

        <p className={styles.date}>
          {t(date)}
        </p>

        {price && (
          <p className={styles.price}>
            {t(price)}
          </p>
        )}

        {status === "full" ? (
          <span className={styles.badge}>
            {t("full")}
          </span>
        ) : (
          <Button
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(buttonText)}
          </Button>
        )}

      </div>

    </article>
  );
}