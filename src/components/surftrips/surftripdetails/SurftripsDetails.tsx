import Image from "next/image";
import type { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

import Button from "@/components/ui/Button/Button";

import styles from "./SurftripsDetails.module.css";

type Trip = {
  id: number;
  slug: string;
  image: StaticImageData;
  alt: string;
  date: string;
  title: string;
  price: string | null;
  meta: string;
  status: string;
  buttonText: string;
  buttonLink: string | null;
};

export default async function SurftripDetails({
  trip,
}: {
  trip: Trip;
}) {
  const t = await getTranslations("surftrips.upcomingTrips");
  const t2 = await getTranslations("surftrips.included");


  return (
    <div className={styles.wrapper}>

      <div className={styles.gallery}>
        <div className={styles.imageWrapper}>
          <Image
            src={trip.image}
            alt={t(trip.alt)}
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={styles.info}>

        <h1 className={styles.title}>
          {t(trip.title)}
        </h1>

        <p className={styles.date}>
          {t(trip.date)}
        </p>

        {trip.price && (
          <div className={styles.price}>
            <p>
              {t(trip.price)}
            </p>

            <small>
              {t("details.payNow")}
            </small>

            <small>
              {t("details.payOnArrival")}
            </small>
          </div>
        )}

        <p className={styles.description}>
          {t("details.description")}
        </p>

        <div className={styles.included}>

          <h3>
            {t2("title")}
          </h3>

          <ul>
            <li>{t2("items.accommodation")}</li>
            <li>{t2("items.meals")}</li>
            <li>{t2("items.transport")}</li>
            <li>{t2("items.surf")}</li>
            <li>{t2("items.studio")}</li>
            <li>{t2("items.experiences")}</li>
          </ul>

        </div>

        <div className={styles.notIncluded}>

          <p>
            {t2("notIncluded.title")}
          </p>

          <h4>
            {t2("notIncluded.subtitle")}
          </h4>

          <ul>
            <li>{t2("notIncluded.items.flights")}</li>
            <li>{t2("notIncluded.items.alcohol")}</li>
            <li>{t2("notIncluded.items.insurance")}</li>
          </ul>

        </div>

        <p className={styles.description}>
          {t("details.description2")}
        </p>

        {trip.status === "full" ? (
          <span className={styles.badge}>
            {t("full")}
          </span>
        ) : (
        <Button
            as="a"
            href={trip.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(trip.buttonText)}
        </Button>
        )} 

        <Button
            as="a"
            href="/surftrips"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("buttonViewAll")}
            {/* {"View All Trips"} */}
        </Button>
        
      </div>
    </div>
  );
}