import Link from "next/link";
import Image from "next/image";

import { PRODUCTS_BY_TYPE_QUERY } from "@/lib/shopify/queries"; 
import { shopifyClient } from "@/lib/shopify/client";

import styles from "./SurftripsScrollGrid.module.css";

import Container from "@/components/ui/Container/Container";

type Product = {
  id: string;
  handle: string;
  title: string;
  productType: string;
  featuredImage: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  } | null;

  variants: {
    nodes: {
      availableForSale: boolean;
      price: {
        amount: string;
        currencyCode: string;
      };
    }[];
  };

  metafields: {
    namespace: string;
    key: string;
    value: string;
    type: string;
  }[];
};

type SurfTripsScrollGridProps = { heading?: string; headingHref?: string; };

export default async function SurfTripsScrollGrid({ 
  heading, 
  headingHref,
}: SurfTripsScrollGridProps) { 

  const { data } = await shopifyClient.request(PRODUCTS_BY_TYPE_QUERY, {
     variables: { query: `product_type:"surftrip"`, }, });

  const products: Product[] = data?.products?.nodes ?? []; 
  if (!products.length) return null;
   
  const sortedProducts = [...products].sort((a, b) => {

  const dateA = a.metafields.find(
    (field) => field?.key === "trip_start_date"
  )?.value;

  const dateB = b.metafields.find(
    (field) => field?.key === "trip_start_date"
  )?.value;

  return new Date(dateA ?? "").getTime() - new Date(dateB ?? "").getTime();
});

  
  return (
    <Container>
      <section className={styles.section}>
        {heading && (
          <h2 className={styles.heading}>
            {headingHref ? (
              <Link href={headingHref} className={styles.headingLink}>
                {heading}
              </Link>
            ) : (
              heading
            )}
          </h2>
        )}

        <div className={styles.scroller}>
          {sortedProducts.map((product) => {

            const price = product.variants.nodes[0]?.price;

            const metafields = product.metafields ?? [];

            const Date =
            metafields.find((field) => field?.key === "trip_date")?.value ?? null;

            const available = product.variants.nodes[0]?.availableForSale;


            return (
              <Link
                key={product.id}
                href={`/surftrips/${product.handle}`}
                className={styles.card}
              >
                {product.featuredImage && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.featuredImage.url}
                      alt={
                        product.featuredImage.altText || product.title
                      }
                      fill
                      sizes="(max-width: 768px) 85vw, 25vw"
                      className={styles.image}
                    />
                  </div>
                )}

                <h3 className={styles.title}>{product.title}</h3>

                <h3 className={styles.price}>{Date}</h3>

                {available ? (
                  price && (
                    <p className={styles.price}>
                      {new Intl.NumberFormat("es-ES", {
                        style: "currency",
                        currency: price.currencyCode,
                      }).format(Number(price.amount) * 2)}
                    </p>
                  )
                ) : (
                  <p className={styles.price}>
                    Agotado
                  </p>
                )}
                
              </Link>
            );
          })}
        </div>
      </section>
    </Container>
  );
}