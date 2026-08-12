"use client";

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
            Pay now 50%:{" "}
            {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: selectedVariant.price.currencyCode,
            }).format(Number(selectedVariant.price.amount))}
        </small>

        <small>
            Pay on arrival:{" "}
            {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: selectedVariant.price.currencyCode,
            }).format(Number(selectedVariant.price.amount))}
        </small>
        </div>


        <p className={styles.description}>{product.description}</p>

        <div className={styles.included}>
            <h3>What's Included</h3>

            <ul>
                <li>Accommodation</li>
                <li>Meals (breakfast, lunch and dinner)</li>
                <li>Beach Transport</li>
                <li>Surf Lessons & Equipment</li>
                <li>Classic Studio</li>
                <li>Local Experiences</li>
            </ul>

            <div className={styles.notIncluded}>
                <p>NOT INCLUDED</p>

                <h4>Plan these separately</h4>

                <ul>
                <li>Flights or ferry to Morocco</li>
                <li>Alcoholic beverages</li>
                <li>Medical / travel insurance</li>
                </ul>
            </div>
        </div>

        <div className={styles.quantity}>
          <label htmlFor="quantity">People</label>
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
              ? "Añadiendo..."
              : added
              ? "Añadido ✓"
              : "Añadir al carrito"}
          </Button>
        ) : (
          <p className={styles.soldOut}>
            Agotado
          </p>
        )}

        <Button
            as="a"
            href="/surftrips"
            variant="secondary"
            >
            {("View all Trips")}
        </Button>


      </div>
    </div>
  );
}