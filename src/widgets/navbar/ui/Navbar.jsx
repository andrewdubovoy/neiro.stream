import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        neiro<span className={styles.dot}>.</span>stream
      </div>
      <ul className={styles.links}>
        <li><a href="#characters">Персонажи</a></li>
        <li><a href="#donate">Тарифы донатов</a></li>
        <li><a href="#watch" className={styles.cta}>Смотреть</a></li>
      </ul>
    </nav>
  );
}
