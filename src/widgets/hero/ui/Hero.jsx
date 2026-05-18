import { Button } from '../../../shared/ui';
import { HERO_STATS } from '../../../shared/config';
import { StreamPreview } from './StreamPreview';
import styles from './Hero.module.css';

export function Hero({ onDonate }) {
  return (
    <section className={styles.hero} id="watch">
      <div className={styles.left}>
        <div className={styles.eyebrow}>AI-стриминг нового поколения</div>
        <h1 className={styles.title}>
          Живые стримы<br />с <em>нейро-<br />девушками</em>
        </h1>
        <p className={styles.sub}>
          Персонажи на базе AI ведут стримы в реальном времени. Общайтесь в чате,
          отправляйте донаты — и смотрите, как они реагируют голосом и анимацией.
        </p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={() => document.getElementById('watch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть сейчас
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше
          </Button>
        </div>
        <div className={styles.stats}>
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <StreamPreview onDonate={onDonate} />
      </div>
    </section>
  );
}
