import React from 'react';
import './IntegrationConfig.module.css';

export default function IntegrationConfig({ provider, onChange }) {
  return (
    <div style={{ background: '#121212', color: '#fff', padding: 12, borderRadius: 8 }}>
      <label style={{ display: 'block', marginBottom: 8 }}>Провайдер донатов</label>
      <select value={provider} onChange={(e) => onChange(e.target.value)}>
        <option value="mock">Mock (тест)</option>
        <option value="crypto_wallet">Crypto Wallet</option>
        <option value="card">Card Processor</option>
      </select>

      <div style={{ marginTop: 12 }}>
        {provider === 'crypto_wallet' && (
          <div>
            <strong>Crypto Wallet</strong>
            <p>Пример настройки: подключите адрес кошелька, WebSocket для нотификаций и webhook для подтверждений транзакций.</p>
            <code>WALLET_ADDRESS=0x...</code>
          </div>
        )}

        {provider === 'card' && (
          <div>
            <strong>Card Processor</strong>
            <p>Пример: подключение Stripe/PayPal через API-ключи и webhook для подтверждений.</p>
            <code>API_KEY=sk_test_...</code>
          </div>
        )}

        {provider === 'mock' && (
          <div>
            <strong>Mock</strong>
            <p>Демонстрационный провайдер — симулирует донаты локально.</p>
          </div>
        )}
      </div>
    </div>
  );
}
