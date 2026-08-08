"use client";

import { ShoppingCart } from "lucide-react";
import styles from "./CartButton.module.css";
import Link from "next/link";
import { useCart } from "@/lib/shopify/cart-context";

function CartButton() {
  const { totalQuantity } = useCart();

  return (
    <Link href="/shop" className={styles.cartLink} aria-label="Open shop page">
      <button className={styles.cartButton} aria-label="Open shop page">
        <ShoppingCart size={24} />
        {totalQuantity > 0 && (
          <span className={styles.badge}>{totalQuantity}</span>
        )}
      </button>
    </Link>
  );
}

export default CartButton;