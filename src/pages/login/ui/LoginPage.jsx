import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const user = { name: name || 'Guest', email };
    localStorage.setItem('neiro_user', JSON.stringify(user));
    // navigate back to home
    window.location.hash = '#home';
    window.location.reload();
  };

  return (
    <main className={styles.page}>
      <div className={styles.box}>
        <h2>Войти</h2>
        <form onSubmit={submit} className={styles.form}>
          <label>Имя</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
          <label>Email (опционально)</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <button type="submit" className={styles.loginBtn}>Войти</button>
        </form>
      </div>
    </main>
  );
}
