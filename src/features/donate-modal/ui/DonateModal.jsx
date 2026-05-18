import { useState } from 'react';
import { Button } from '../../../shared/ui';
import styles from './DonateModal.module.css';

const PRESET_AMOUNTS = [50, 200, 500, 1000];

export function DonateModal({ onClose, onSuccess }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [activePreset, setActivePreset] = useState(null);

  const handlePreset = (val) => {
    setActivePreset(val);
    setAmount(String(val));
  };

  const handleSubmit = () => {
    const num = Number(amount);
    if (!num || num < 10) return;
    onSuccess({ amount: num, message });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <h3 className={styles.title}>Отправить донат</h3>
        <div className={styles.tag}>Поддержи персонажа</div>

        <div className={styles.presets}>
          {PRESET_AMOUNTS.map((val) => (
            <button
              key={val}
              className={`${styles.preset} ${activePreset === val ? styles.active : ''}`}
              onClick={() => handlePreset(val)}
            >
              {val} ₽
            </button>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Сумма (₽)</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Введите сумму"
            min="10"
            value={amount}
            onChange={(e) => { setAmount(e.target.value); setActivePreset(null); }}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Сообщение</label>
          <textarea
            className={styles.textarea}
            rows={2}
            placeholder="Ваше сообщение персонажу..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button variant="primary" onClick={handleSubmit} style={{ width: '100%' }}>
          Отправить донат
        </Button>
      </div>
    </div>
  );
}
