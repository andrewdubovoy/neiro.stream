# neiro.stream

AI-стриминговая платформа с нейро-персонажами.

## Стек

- **React 18** + **Vite**
- **CSS Modules** — изолированные стили для каждого компонента
- **FSD (Feature-Sliced Design)** — архитектурная методология

---

## Архитектура: Feature-Sliced Design

```
src/
├── app/                        # Инициализация приложения
│   └── App.jsx
│
├── pages/                      # Страницы (роутинг)
│   └── home/
│       ├── ui/HomePage.jsx
│       └── index.js
│
├── widgets/                    # Самостоятельные блоки UI
│   ├── navbar/                 # Фиксированная навигация
│   ├── hero/                   # Hero-секция + стрим-превью
│   ├── characters/             # Секция с персонажами
│   ├── donate-tiers/           # Тарифы донатов
│   └── footer/                 # Подвал
│
├── features/                   # Пользовательские сценарии
│   ├── char-modal/             # Модалка персонажа
│   ├── donate-modal/           # Форма доната
│   └── theme-toggle/           # Переключатель темы
│
├── entities/                   # Бизнес-сущности
│   ├── character/              # Карточка персонажа
│   └── donate-tier/            # Карточка тарифа
│
└── shared/                     # Переиспользуемое
    ├── ui/                     # Button, SectionLabel
    ├── styles/                 # global.css, variables.css
    └── config/                 # Данные: персонажи, тарифы, чат
```

### Правила импортов (слои сверху вниз)
```
pages → widgets → features → entities → shared
```
Нижние слои не могут импортировать из верхних.

---

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```
