import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        neiro<span className={styles.dot}>.</span>stream
      </div>
      <div className={styles.links}>
        <a href="#characters" className={styles.link}>Персонажи</a>
        <a href="#donate" className={styles.link}>Донаты</a>
      </div>
      <div className={styles.copy}>© 2025 neiro.stream</div>
    </footer>
  );
}
