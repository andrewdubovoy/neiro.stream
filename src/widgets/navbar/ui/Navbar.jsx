import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const u = localStorage.getItem('neiro_user');
      if (u) setUser(JSON.parse(u));
    } catch (e) { /* ignore */ }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('neiro_user');
    setUser(null);
    window.location.hash = '#home';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        neiro<span className={styles.dot}>.</span>stream
      </div>
      <ul className={styles.links}>
        <li><a href="#characters">Персонажи</a></li>
        <li><a href="#donate">Тарифы донатов</a></li>
        {/* removed direct "Смотреть" CTA per request */}
        {!user ? (
          <li><a href="#login" className={styles.cta}>Войти</a></li>
        ) : (
          <li className={styles.userWrap}>
            <span className={styles.userName}>{user.name}</span>
            <button className={styles.logout} onClick={onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
