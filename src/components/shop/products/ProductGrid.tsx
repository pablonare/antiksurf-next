import Link from "next/link";
import Image from "next/image";
import styles from "./ProductGrid.module.css";

type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: { url: string; altText: string | null } | null;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/shop/${product.handle}`}
          className={styles.card}
        >
          {product.featuredImage && (
            <div className={styles.imageWrapper}>
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText || product.title}
                fill
                className={styles.image}
              />
            </div>
          )}
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
        </Link>
      ))}
    </div>
  );
}