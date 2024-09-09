import styles from "./Header.module.css";
import Link from "next/link";

export default function header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>QuickBet Movies</h1>
      <nav>
        <Link href="/">Popular</Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
      </nav>
    </header>
  );
}
