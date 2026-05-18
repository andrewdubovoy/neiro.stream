import { useEffect, useRef } from 'react';
import { CHAT_MESSAGES, DONATE_NOTIFS } from '../../../shared/config';
import styles from './StreamPreview.module.css';

export function StreamPreview({ onDonate }) {
  const chatRef = useRef(null);
  const notifRef = useRef(null);
  const idxRef = useRef(0);
  const nIdxRef = useRef(0);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      if (!chatRef.current) return;
      const m = CHAT_MESSAGES[idxRef.current % CHAT_MESSAGES.length];
      const el = document.createElement('div');
      el.className = styles.chatMsg + (m.donor ? ' ' + styles.donator : '');
      el.innerHTML = `<span class="${styles.username}">${m.user}</span> ${m.text}`;
      chatRef.current.insertBefore(el, chatRef.current.firstChild);
      if (chatRef.current.children.length > 8) {
        chatRef.current.removeChild(chatRef.current.lastChild);
      }
      idxRef.current++;
    }, 2800);

    const notifInterval = setInterval(() => {
      if (!notifRef.current) return;
      nIdxRef.current = (nIdxRef.current + 1) % DONATE_NOTIFS.length;
      const n = DONATE_NOTIFS[nIdxRef.current];
      const amountEl = notifRef.current.querySelector('[data-amount]');
      const textEl = notifRef.current.querySelector('[data-text]');
      if (amountEl) amountEl.textContent = n.amount;
      if (textEl) textEl.textContent = n.text;
      notifRef.current.style.animation = 'none';
      void notifRef.current.offsetWidth;
      notifRef.current.style.animation = 'notif-appear 0.4s ease-out';
    }, 5000);

    return () => {
      clearInterval(chatInterval);
      clearInterval(notifInterval);
    };
  }, []);

  return (
    <div className={styles.preview}>
      <div className={styles.video}>
        <div className={styles.liveBadge}>
          <div className={styles.liveDot} />
          Live
        </div>
        <div className={styles.viewersBadge}>👁 847</div>

        <div className={styles.avatarContainer}>
          <div className={styles.avatarGlow} />
          <svg className={styles.avatarSvg} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="90" cy="190" rx="55" ry="18" fill="rgba(255,77,122,0.08)"/>
            <ellipse cx="90" cy="80" rx="52" ry="58" fill="#1a0510"/>
            <rect x="38" y="70" width="20" height="100" rx="10" fill="#150410"/>
            <rect x="122" y="70" width="20" height="100" rx="10" fill="#150410"/>
            <rect x="79" y="128" width="22" height="28" rx="4" fill="#f0c8cc"/>
            <ellipse cx="90" cy="95" rx="40" ry="45" fill="#f5d0d4"/>
            <ellipse cx="90" cy="58" rx="42" ry="22" fill="#150410"/>
            <path d="M 48 75 Q 55 50 90 48 Q 125 50 132 75" fill="#150410"/>
            <path d="M 55 68 Q 62 82 70 78" stroke="#150410" strokeWidth="12" strokeLinecap="round" fill="none"/>
            <path d="M 65 62 Q 68 80 76 76" stroke="#150410" strokeWidth="10" strokeLinecap="round" fill="none"/>
            <ellipse cx="74" cy="95" rx="9" ry="10" fill="#1a0812"/>
            <ellipse cx="106" cy="95" rx="9" ry="10" fill="#1a0812"/>
            <ellipse cx="74" cy="94" rx="5" ry="6" fill="#9b2fa0"/>
            <ellipse cx="106" cy="94" rx="5" ry="6" fill="#9b2fa0"/>
            <circle cx="76" cy="92" r="2" fill="white"/>
            <circle cx="108" cy="92" r="2" fill="white"/>
            <ellipse cx="62" cy="108" rx="12" ry="6" fill="rgba(255,77,122,0.2)"/>
            <ellipse cx="118" cy="108" rx="12" ry="6" fill="rgba(255,77,122,0.2)"/>
            <ellipse cx="90" cy="110" rx="3" ry="2" fill="rgba(0,0,0,0.08)"/>
            <path d="M 80 120 Q 90 128 100 120" stroke="#e05070" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="97" rx="6" ry="8" fill="#f5d0d4"/>
            <ellipse cx="130" cy="97" rx="6" ry="8" fill="#f5d0d4"/>
            <path d="M 35 175 Q 50 148 90 145 Q 130 148 145 175 L 145 220 L 35 220 Z" fill="#2a1028"/>
            <path d="M 75 145 L 90 165 L 105 145" fill="#ff4d7a" opacity="0.6"/>
          </svg>
        </div>
      </div>

      <div className={styles.chat}>
        <div className={styles.donateNotif} ref={notifRef}>
          <span className={styles.notifAmount} data-amount>+500 ₽</span>
          <span className={styles.notifText} data-text>xX_Vadim_Xx: давай спой!</span>
        </div>
        <div className={styles.chatMessages} ref={chatRef}>
          <div className={styles.chatMsg}><span className={styles.username}>sakura_fan</span> такая милая 💕</div>
          <div className={styles.chatMsg}><span className={styles.username}>dark_knight_99</span> лучший стрим сегодня</div>
          <div className={`${styles.chatMsg} ${styles.donator}`}><span className={styles.username}>Mikhail_V</span> спасибо за стрим!</div>
          <div className={styles.chatMsg}><span className={styles.username}>anime_watcher</span> когда следующий стрим?</div>
        </div>
      </div>

      <div className={styles.footer}>
        <input type="text" className={styles.input} placeholder="Написать в чат..." />
        <button className={styles.donateBtn} onClick={onDonate}>Донат</button>
      </div>
    </div>
  );
}
