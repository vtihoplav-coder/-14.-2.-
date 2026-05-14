# Програмна система «Магазин»

React-проєкт для практичного заняття №14 з дисципліни «Аналіз вимог до програмного забезпечення».

## Що реалізовано

- авторизаційний екран;
- головна сторінка магазину;
- каталог товарів;
- фільтрація за категоріями;
- пошук товарів;
- картка товару;
- кошик;
- оформлення замовлення;
- вибір способу доставки та оплати;
- адміністративна панель;
- тестові дані товарів, користувачів і замовлень.

## Запуск на Windows

```powershell
npm install
npm run dev
```

Після запуску відкрити адресу, яку покаже Vite, зазвичай:

```text
http://localhost:5173
```

## Docker-запуск

```powershell
docker compose up --build
```

Після запуску:

```text
http://localhost:5173
```

## Структура

```text
src/
  App.jsx
  main.jsx
  styles.css
  data/products.js
  components/
    Header.jsx
    ProductCard.jsx
    CartPanel.jsx
    Checkout.jsx
    AdminPanel.jsx
```
