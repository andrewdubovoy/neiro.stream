import { CHARACTERS } from '../../../shared/config';
import { CharacterCard } from '../../../entities/character';
import { SectionLabel } from '../../../shared/ui';
import styles from './Characters.module.css';

export function Characters({ onCharacterClick }) {
  return (
    <section className={styles.section} id="characters">
      <SectionLabel>Персонажи</SectionLabel>
      <h2 className={styles.heading}>
        Три уникальных<br /><em>нейро-характера</em>
      </h2>
      <div className={styles.grid}>
        {CHARACTERS.map((char) => (
          <CharacterCard key={char.id} character={char} onClick={onCharacterClick} />
        ))}
      </div>
    </section>
  );
}
