import Link from "next/link";
import styles from "./footer.module.css";
import { useState } from "react";
import Overlay from "../overlay/overlay";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__center}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <Link className={styles.footer__link} href="/">
                Home
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link className={styles.footer__link} href="/tours/tours">
                Tours
              </Link>
            </li>
            <li className={styles.footer__item}>
              <button
                data-contact-form
                className={styles.footer__link}
                onClick={toggleOverlay}
              >
                Contactos
              </button>
            </li>
            <Overlay isOpen={isOpen} onClose={toggleOverlay} />
            <li className={styles.footer__item}>
              <Link className={styles.footer__link} href="/faqs/">
                FAQS
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>© Copyright 2022 - Táxis Zona I</p>
        </div>

        <div></div>
      </footer>
    </>
  );
}
