import styles from "./navbar.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);


  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo}>
            <Image src={Logo} alt="logo" height="60px" width="60px" />
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Homepage
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/tours/tours">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Tours
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/personalize/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Personalizar Tour
              </a>
            </Link>
          </li>

          <li className={styles.navitem}>
            <Link href="/contacts/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Contactos
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}
