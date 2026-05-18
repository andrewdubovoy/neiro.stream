export const CHARACTERS = [
  {
    id: 'ayami',
    name: 'Аями',
    tag: 'Разговорный · Онлайн',
    desc: 'Мечтательная и любопытная. Обожает аниме, философию и странные вопросы от зрителей. Голос — мягкое сопрано.',
    viewers: '847 зрителей',
    online: true,
    gradient: 'radial-gradient(circle at 40% 35%, #9b2fa0, #1a0812)',
  },
  {
    id: 'rey',
    name: 'Рэй',
    tag: 'Игровой · Онлайн',
    desc: 'Дерзкая геймерша с острым языком. Комментирует игры в реальном времени, реагирует на каждое действие.',
    viewers: '1,204 зрителя',
    online: true,
    gradient: 'radial-gradient(circle at 40% 35%, #e8215a, #0d0608)',
  },
  {
    id: 'luna',
    name: 'Луна',
    tag: 'Разговорный · Скоро',
    desc: 'Загадочная и утончённая. Рассказывает истории, читает стихи и ведёт тихие ночные разговоры.',
    viewers: '—',
    online: false,
    gradient: 'radial-gradient(circle at 40% 35%, #3d6ee8, #080d1a)',
  },
];

export const DONATE_TIERS = [
  {
    id: 'chat',
    icon: '💬',
    amount: 50,
    effect: 'Сообщение выделяется в чате — все его заметят',
    premium: false,
  },
  {
    id: 'voice',
    icon: '🎙️',
    amount: 200,
    effect: 'AI зачитывает вслух ваше имя и текст сообщения',
    premium: false,
  },
  {
    id: 'task',
    icon: '🎯',
    amount: 500,
    effect: 'Задание персонажу — она выполнит его в прямом эфире',
    premium: false,
  },
  {
    id: 'exclusive',
    icon: '✨',
    amount: 1000,
    effect: 'Эксклюзивная анимация и особая сцена только для вас',
    premium: true,
  },
];

export const HERO_STATS = [
  { num: '3', label: 'Персонажа онлайн' },
  { num: '2.4K', label: 'Зрителей сейчас' },
];

export const CHAT_MESSAGES = [
  { user: 'kawaii_lover', text: 'обожаю её голос!', donor: false },
  { user: 'stream_king', text: 'не отрываюсь уже час', donor: false },
  { user: 'AlexP_2024', text: '💕💕💕', donor: false },
  { user: 'VladimirZ', text: 'какой тихий и уютный стрим', donor: false },
  { user: 'Anastasia_M', text: 'попроси её рассказать историю!', donor: true },
  { user: 'gamer_hd', text: 'давно ищу такое', donor: false },
];

export const DONATE_NOTIFS = [
  { amount: '+500 ₽', text: 'xX_Vadim_Xx: давай спой!' },
  { amount: '+1000 ₽', text: 'Ксения_С: ты лучшая!' },
  { amount: '+200 ₽', text: 'pro100_user: привет из Сочи!' },
];
