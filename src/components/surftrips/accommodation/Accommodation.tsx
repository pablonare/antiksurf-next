"use client";

import Container from "../../../components/ui/Container/Container";
import Section from "../../../components/layout/Section/Section";

import accommodation1 from "../../../assets/images/surftrips/accommodation/accommodation_1.webp";
import accommodation2 from "../../../assets/images/surftrips/accommodation/accommodation_2.webp";
import accommodation3 from "../../../assets/images/surftrips/accommodation/accommodation_3.webp";
import accommodation4 from "../../../assets/images/surftrips/accommodation/accommodation_4.webp";

import styles from "./Accommodation.module.css";

import { useState } from "react";
import type { StaticImageData } from "next/image";

function Accommodation() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  return (
    <Section>
      <Container>
        
        <header className="section-title">
          <h2>Accommodation</h2>
        </header>

        <p className="section-subtitle">
          We stay at Antik Riad, a charming traditional house just 100
          meters from the surf club. It becomes the meeting point for
          breakfasts, planning, rest after surf sessions and the community
          rhythm of the whole trip.
        </p>

        <div className={styles.gallery}>
          <img
            className={styles.image}
            src={accommodation1.src}
            alt="Accommodation photo 1"
            onClick={() => setSelectedImage(accommodation1)}
          />
          <img
            className={styles.image}
            src={accommodation2.src}
            alt="Accommodation photo 2"
            onClick={() => setSelectedImage(accommodation2)}
          />
          <img
            className={styles.image}
            src={accommodation3.src}
            alt="Accommodation photo 3"
            onClick={() => setSelectedImage(accommodation3)}
          />
          <img
            className={styles.image}
            src={accommodation4.src}
            alt="Accommodation photo 4"
            onClick={() => setSelectedImage(accommodation4)}
          />
        </div>

        {selectedImage && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <img
              className={styles.lightboxImage}
              src={selectedImage.src}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </Container>
    </Section>
  );
}

export default Accommodation;