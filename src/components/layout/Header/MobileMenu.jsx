"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import styles from "./MobileMenu.module.css";
import MenuIcon from "../../ui/Icon/MenuIcon";
import CloseIcon from "../../ui/Icon/CloseIcon";
import Brand from "../../ui/Brand/Brand";
import { Link } from "@/i18n/navigation";

function MobileMenu() {
  const t = useTranslations("navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
        aria-label={t("openMenu")}
      >
        <MenuIcon />
      </button>

      {isOpen && (
        <div
          className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label={t("closeMenu")}
        >
          <CloseIcon />
        </button>

        <div className={styles.menuBrand}>
          <Brand />
        </div>

        <nav className={styles.navigation}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            {t("home")}
            <span className="nav__subtitle">
              {" "} | {t("lessonsAndRentals")}
            </span>
          </Link>

          <Link href="/surftrips" onClick={() => setIsOpen(false)}>
            {t("trips")}
          </Link>

          <Link href="/events" onClick={() => setIsOpen(false)}>
            {t("events")}
          </Link>

          <Link href="/shop" onClick={() => setIsOpen(false)}>
            {t("shop")}
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default MobileMenu;