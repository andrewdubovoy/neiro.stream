import { DONATE_TIERS } from '../../../shared/config';
import { DonateTierCard } from '../../../entities/donate-tier';
import { SectionLabel } from '../../../shared/ui';
import styles from './DonateTiers.module.css';

export function DonateTiers() {
  return (
    <section className={styles.section} id="donate">
      <SectionLabel>Система донатов</SectionLabel>
      <h2 className={styles.heading}>
        Взаимодействуй<br /><em>напрямую</em>
      </h2>
      <div className={styles.grid}>
        {DONATE_TIERS.map((tier) => (
          <DonateTierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}
