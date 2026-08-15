import Link from "next/link";
import styles from "./Brand.module.css";

function Brand() {
  return (
    <Link href="/" className={styles.brand}>
      <h1>ANTIK SURF CLUB</h1>
      <h2>Asilah Morocco</h2>
    </Link>
  );
}

export default Brand;