import React from 'react';
import styles from './StreamCard.module.css';

export default function StreamCard({ character }) {
  const { id, name, tag, viewers, online, gradient } = character;
  return (
    <a href={`#stream-${id}`} className={styles.link}>
      <article className={styles.card} style={{ background: gradient }}>
        <div className={styles.header}>
          <div className={styles.title}>{name}</div>
          <div className={styles.tag}>{tag}</div>
        </div>
        <div className={styles.meta}>
          <span className={styles.viewers}>{viewers}</span>
          <button className={styles.watch}>{online ? 'Смотреть' : 'Подписаться'}</button>
        </div>
      </article>
    </a>
  );
}
