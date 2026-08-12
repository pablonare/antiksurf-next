"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/shopify/cart-context";
import styles from "./SurftripDetail.module.css";
import Button from "@/components/ui/Button/Button";


type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
  price: { amount: string; currencyCode: string };
};

type Product = {
  id: string;
  title: string;
  description: string;
  images: { nodes: { url: string; altText: string | null }[] };
  variants: { nodes: Variant[] };

  metafields?: {
    namespace: string;
    key: string;
    value: string;
    type: string;
  }[];
};

export default function ProductDetail({ product }: { product: Product }) {

  const t = useTranslations("surftrips.details");

  const { addToCart, isLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants.nodes[0]
  );
  const [quantity, setQuantity] = useState<number | "">(1);
  const [added, setAdded] = useState(false);

  const images = product.images.nodes;

  const metafields = product.metafields ?? [];

  const priceTotal =
  metafields.find((field) => field?.key === "precio_total")?.value ?? null;

  const Date =
  metafields.find((field) => field?.key === "trip_date")?.value ?? null;

  const available = product.variants.nodes[0]?.availableForSale;


  async function handleAddToCart() {
    if (
    !selectedVariant.availableForSale ||
    isLoading ||
    quantity === "" ||
    quantity < 1
    ) {
      return;
    }

    await addToCart(selectedVariant.id, quantity);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageWrapper}>
            <Image
              src={img.url}
              alt={img.altText || product.title}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
        <h1 className={styles.title}>{Date}</h1>

        <div className={styles.price}>
        <p>
            {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: selectedVariant.price.currencyCode,
            }).format(Number(selectedVariant.price.amount) * 2)}
        </p>

        <small>
            {t("payNow")}:{" "}
            {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: selectedVariant.price.currencyCode,
            }).format(Number(selectedVariant.price.amount))}
        </small>

        <small>
            {t("payOnArrival")}:{" "}
            {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: selectedVariant.price.currencyCode,
            }).format(Number(selectedVariant.price.amount))}
        </small>
        </div>


        <p className={styles.description}>
          {t("description")}
        </p>

        <div className={styles.included}>
            <h3>{t("whatsIncluded")}</h3>

            <ul>
              <li>{t("included.accommodation")}</li>
              <li>{t("included.meals")}</li>
              <li>{t("included.transport")}</li>
              <li>{t("included.surf")}</li>
              <li>{t("included.studio")}</li>
              <li>{t("included.experiences")}</li>
            </ul>

            <p>{t("notIncluded")}</p>

            <h4>{t("planSeparately")}</h4>

            <ul>
              <li>{t("notIncludedItems.flights")}</li>
              <li>{t("notIncludedItems.alcohol")}</li>
              <li>{t("notIncludedItems.insurance")}</li>
            </ul>
        </div>

        <p className={styles.description}>
          {t("description2")}
        </p>

        <div className={styles.quantity}>
          <label htmlFor="quantity">
            {t("people")}
          </label>

          <input
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
            const value = e.target.value;

            if (value === "") {
              setQuantity("");
            } else {
              setQuantity(Math.max(1, Number(value)));
            }
          }}
          />
        </div>

        {selectedVariant.availableForSale ? (
          <Button
            as="a"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading
              ? t("adding")
              : added
              ? t("added")
              : t("addToCart")}
          </Button>
        ) : (
          <p className={styles.soldOut}>
            {t("soldOut")}
          </p>
        )}

        <Button
          as="a"
          href="/surftrips"
          variant="secondary"
        >
          {t("viewAllTrips")}
        </Button>



      </div>
    </div>
  );
}