import styles from './Button.module.css';

export function Button({ children, variant = 'primary', onClick, disabled, style }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
