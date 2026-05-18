import { useState } from 'react';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.body.classList.toggle('light', next);
  };

  return (
    <button className={styles.toggle} onClick={toggle}>
      {isLight ? '🌙 Тёмная тема' : '☀ Светлая тема'}
    </button>
  );
}
