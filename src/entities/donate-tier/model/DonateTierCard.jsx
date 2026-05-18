import styles from './DonateTierCard.module.css';

export function DonateTierCard({ tier }) {
  return (
    <div className={`${styles.card} ${tier.premium ? styles.premium : ''}`}>
      <span className={styles.icon}>{tier.icon}</span>
      <div className={styles.amount}>
        <span className={styles.currency}>от </span>
        {tier.amount}
        <span className={styles.currency}> ₽</span>
      </div>
      <div className={styles.effect}>{tier.effect}</div>
    </div>
  );
}
