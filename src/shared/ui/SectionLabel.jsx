import styles from './SectionLabel.module.css';

export function SectionLabel({ children }) {
  return <div className={styles.label}>{children}</div>;
}
