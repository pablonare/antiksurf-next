"use client";

import Image from "next/image";
import { useCart } from "@/lib/shopify/cart-context";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, checkoutUrl, updateLineQuantity, removeLine, isLoading } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeCart} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2>Tu carrito</h2>
          <button onClick={closeCart} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        {lines.length === 0 ? (
          <p className={styles.empty}>Tu carrito está vacío.</p>
        ) : (
          <>
            <div className={styles.lines}>
              {lines.map((line) => (
                <div key={line.id} className={styles.line}>
                  {line.merchandise.image && (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={line.merchandise.image.url}
                        alt={line.merchandise.image.altText || line.merchandise.product.title}
                        fill
                        className={styles.image}
                      />
                    </div>
                  )}
                  <div className={styles.lineInfo}>
                    <p className={styles.lineTitle}>{line.merchandise.product.title}</p>
                    {line.merchandise.title !== "Default Title" && (
                      <p className={styles.lineVariant}>{line.merchandise.title}</p>
                    )}
                    <p className={styles.linePrice}>
                      {new Intl.NumberFormat("es-ES", {
                        style: "currency",
                        currency: line.merchandise.price.currencyCode,
                      }).format(Number(line.merchandise.price.amount))}
                    </p>
                    <div className={styles.qtyRow}>
                      <button
                        disabled={isLoading}
                        onClick={() => updateLineQuantity(line.id, Math.max(1, line.quantity - 1))}
                      >
                        −
                      </button>
                      <span>{line.quantity}</span>
                      <button
                        disabled={isLoading}
                        onClick={() => updateLineQuantity(line.id, line.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className={styles.removeButton}
                        disabled={isLoading}
                        onClick={() => removeLine(line.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              {subtotal && (
                <p className={styles.subtotal}>
                  Subtotal:{" "}
                  {new Intl.NumberFormat("es-ES", {
                    style: "currency",
                    currency: subtotal.currencyCode,
                  }).format(Number(subtotal.amount))}
                </p>
              )}
              <a href={checkoutUrl ?? "#"} className={styles.checkoutButton}>
                Finalizar compra
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}