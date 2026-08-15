import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Button from "../../../../components/ui/Button/Button";
import styles from "./TripCard.module.css";

import Link from "next/link";

export default async function TripCard({
  slug,
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

      <Link href={`/surftrips/${slug}`}>
        <div className={styles.imageCard}>
          <Image
            className={styles.image}
            src={image}
            alt={t(alt)}
            fill
            sizes="(max-width: 768px) 90vw, 25vw"
          />
        </div>
      </Link>

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
        
      </div>

    </article>
  );
}