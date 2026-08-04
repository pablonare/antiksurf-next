
import Button from "../../../../components/ui/Button/Button";
import styles from "./TripCard.module.css";

function TripCard({
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
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={image.src}
        alt={alt}
      />

      <div className={styles.body}>
        <p className={styles.date}>{date}</p>

        <h3 className={styles.title}>{title}</h3>

        {price && (
          <p className={styles.price}>
            {price}
          </p>
        )}

        <p className={styles.meta}>{meta}</p>

        {status === "full" ? (
          <span className={styles.badge}>
            Full
          </span>
        ) : (
          <Button
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </article>
  );
}

export default TripCard;