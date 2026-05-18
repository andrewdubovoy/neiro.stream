import { Button } from '../../../shared/ui';
import styles from './CharModal.module.css';

export function CharModal({ character, onClose, onDonate }) {
  if (!character) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <h3 className={styles.name}>{character.name}</h3>
        <div className={styles.tag}>{character.tag}</div>
        <p className={styles.desc}>
          {character.desc}
          <br /><br />
          👁 {character.viewers}
        </p>
        {character.online ? (
          <Button variant="primary" onClick={() => { onClose(); onDonate(); }} style={{ width: '100%' }}>
            Смотреть стрим
          </Button>
        ) : (
          <Button variant="primary" disabled style={{ width: '100%' }}>
            Скоро в эфире
          </Button>
        )}
      </div>
    </div>
  );
}
