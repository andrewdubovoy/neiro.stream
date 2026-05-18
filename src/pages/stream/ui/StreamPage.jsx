import React, { useEffect, useState } from 'react';
import { CHARACTERS } from '../../../shared/config';
import styles from './StreamPage.module.css';

function parseAmount(amountText) {
  if (!amountText) return 0;
  const m = String(amountText).replace(/\s+/g, '').match(/([0-9]+(?:\.[0-9]+)?)/);
  return m ? Number(m[1]) : 0;
}

export default function StreamPage() {
  const [char, setChar] = useState(null);
  const [donations, setDonations] = useState([]);
  const [popout, setPopout] = useState(null);

  useEffect(() => {
    const id = window.location.hash.replace('#stream-', '');
    const c = CHARACTERS.find((x) => x.id === id);
    setChar(c || null);

    const onDonate = (e) => {
      const payload = e.detail || {};
      const item = {
        amount: payload.amount || payload.sum || '+0 ₽',
        message: payload.message || payload.text || '',
        donor: payload.user || payload.name || 'Гость',
        ts: Date.now(),
      };
      setDonations((d) => [item, ...d]);
      setPopout(item);
    };

    window.addEventListener('neiro:donate', onDonate);
    return () => window.removeEventListener('neiro:donate', onDonate);
  }, []);

  // auto-hide popout after 3s
  useEffect(() => {
    if (!popout) return;
    const t = setTimeout(() => setPopout(null), 3200);
    return () => clearTimeout(t);
  }, [popout]);

  if (!char) {
    return (
      <main className={styles.streamMain}>
        <h2>Стрим не найден</h2>
        <p>Вернитесь на страницу выбора стримов.</p>
        <p><a href="#streams">← Назад</a></p>
      </main>
    );
  }

  // compute top donors (sum amounts)
  const topDonorsMap = donations.reduce((acc, d) => {
    const key = d.donor || 'Гость';
    acc[key] = (acc[key] || 0) + parseAmount(d.amount);
    return acc;
  }, {});
  const topDonors = Object.entries(topDonorsMap)
    .map(([donor, sum]) => ({ donor, sum }))
    .sort((a, b) => b.sum - a.sum)
    .slice(0, 5);

  return (
    <main className={styles.streamMain}>
      <div className={styles.topbar}>
        <h1 className={styles.title}>{char.name}</h1>
        <button className={styles.backBtn} onClick={() => (window.location.hash = '#streams')}>← Назад</button>
      </div>

      <div className={styles.layout}>
        <section className={styles.playerWrap}>
          <div className={styles.player}>
            <div className={styles.playerInner}>Плеер (mock) — {char.name}</div>

            {popout && (
              <div className={styles.popout}>
                <div style={{ fontWeight: 800 }}>{popout.amount}</div>
                <div style={{ fontSize: 13, opacity: 0.9 }}>{popout.donor}{popout.message ? ` — ${popout.message}` : ''}</div>
              </div>
            )}
          </div>

          <div className={styles.controls}>
            <button className={styles.testBtn} onClick={() => window.dispatchEvent(new CustomEvent('neiro:donate', { detail: { amount: '+500 ₽', message: 'Пример доната', user: 'TestUser' } }))}>Отправить тест-донот</button>
          </div>

          <div className={styles.topDonors}>
            <h3>Топ донатеров</h3>
            {topDonors.length === 0 ? (
              <div style={{ opacity: 0.8 }}>Пока нет донатов</div>
            ) : (
              <ol>
                {topDonors.map((t) => (
                  <li key={t.donor}>{t.donor} — {t.sum} ₽</li>
                ))}
              </ol>
            )}
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.panel}>
            <h3>Чат</h3>
            <div className={styles.recentDonates}>
              <div style={{ opacity: 0.8 }}>— стандартный чат (mock)</div>
              <h4 style={{ marginTop: 12 }}>Последние донаты</h4>
              <ul>
                {donations.map((d, i) => (
                  <li key={i}>{d.amount} — {d.donor}{d.message ? ` — ${d.message}` : ''}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
