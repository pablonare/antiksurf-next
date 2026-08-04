import { ShoppingCart } from "lucide-react";
import styles from "./CartButton.module.css";
import Link from "next/link";

function CartButton() {
  return (
    <Link href="/shop" className={styles.cartLink} aria-label="Open shop page">
      <button className={styles.cartButton} aria-label="Open shop page">
        <ShoppingCart size={24} />
      </button>
    </Link>
  );
}

export default CartButton;