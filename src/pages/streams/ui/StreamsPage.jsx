import React from 'react';
import Streams from '../../../widgets/streams';
import styles from './StreamsPage.module.css';

export default function StreamsPage() {
  return (
    <main className={styles.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className={styles.title}>Выбрать стрим</h1>
        <button className={styles.backBtn} onClick={() => (window.location.hash = '#home')}>← Назад</button>
      </div>
      <Streams />
    </main>
  );
}
