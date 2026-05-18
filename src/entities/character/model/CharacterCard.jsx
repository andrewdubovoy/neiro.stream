import styles from './CharacterCard.module.css';

export function CharacterCard({ character, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(character)}>
      <div
        className={styles.avatar}
        style={{ background: character.gradient }}
      >
        <div className={`${styles.status} ${!character.online ? styles.offline : ''}`} />
      </div>
      <div className={styles.name}>{character.name}</div>
      <div className={styles.tag}>{character.tag}</div>
      <div className={styles.desc}>{character.desc}</div>
      <div className={styles.viewers}>{character.viewers}</div>
    </div>
  );
}
