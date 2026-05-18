import React, { useState } from 'react';
import IntegrationConfig from '../../../features/integrations/IntegrationConfig';
import styles from './StudioPage.module.css';

export default function StudioPage() {
  const [provider, setProvider] = useState('mock');

  return (
    <main className={styles.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Студия (админ)</h1>
        <button onClick={() => (window.location.hash = '#streams')}>← Назад</button>
      </div>

      <p>Здесь стример может настраивать сцену, донаты и интеграции.</p>

      <section style={{ marginTop: 16 }}>
        <h2>Текущие интеграции</h2>
        <IntegrationConfig provider={provider} onChange={setProvider} />
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Инструменты трансляции</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <button>Запустить тестовый стрим</button>
          <button>Переключить сцену</button>
        </div>
      </section>
    </main>
  );
}
