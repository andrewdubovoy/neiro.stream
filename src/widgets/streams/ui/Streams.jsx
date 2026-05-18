import React from 'react';
import { CHARACTERS } from '../../../shared/config';
import StreamCard from '../../../entities/stream/model/StreamCard';
import styles from './Streams.module.css';

export default function Streams() {
  return (
    <section className={styles.grid}>
      {CHARACTERS.map((c, i) => (
        <div key={c.id} className={styles.itemFade} style={{ animationDelay: `${i * 60}ms` }}>
          <StreamCard character={c} />
        </div>
      ))}
    </section>
  );
}
