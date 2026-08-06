
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
      <img
        className={styles.image}
        src={image.src}
        alt={t(alt)}
      />

      <div className={styles.body}>
        <p className={styles.date}>{t(date)}</p>

        <h3 className={styles.title}>{t(title)}</h3>

        {price && (
          <p className={styles.price}>
            {t(price)}
          </p>
        )}

        <p className={styles.meta}>{t(meta)}</p>

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