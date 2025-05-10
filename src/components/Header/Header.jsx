"use client";
import Link from "next/link";
import styles from './Header.module.css';
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname();
    
  return (
    <header className={styles.header}>
      <Link
        style={{
          fontSize: "30px",
          color: "rgb(225, 184, 1)",
          textShadow: "inset 0 0 10px rgb(225, 184, 1)",
        }}
        className={`
            ${styles.link}
          `}
        href="/products"
      >
        ALL SHOPS
      </Link>

      <div className={styles.div}>
        <Link
          className={`
              ${styles.link}
              ${
                pathname.includes("/products")
                  ? styles.activeLink
                  : styles.inActiveLink
              }`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`
              ${styles.link}
              ${
                pathname.includes("/cart")
                  ? styles.activeLink
                  : styles.inActiveLink
              }
              `}
          href="/cart"
        >
          cart
        </Link>
        <Link
          className={`
              ${styles.link}
              ${
                pathname.includes("/profile")
                  ? styles.activeLink
                  : styles.inActiveLink
              }
              `}
          href="/profile"
        >
          Profile
        </Link>
      </div>
    </header>
  );
}

export default Header;
