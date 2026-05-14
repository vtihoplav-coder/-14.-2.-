import { mockOrders } from '../data/products.js';
import { BarChart3, Boxes, Users } from 'lucide-react';

export default function AdminPanel({ products }) {
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1);

  return (
    <section className="admin-page">
      <div className="section-title">
        <p>Адміністрування</p>
        <h2>Панель керування магазином</h2>
      </div>
      <div className="kpi-grid">
        <div className="kpi"><Boxes /><span>Товарів</span><strong>{products.length}</strong></div>
        <div className="kpi"><BarChart3 /><span>Середній рейтинг</span><strong>{avgRating}</strong></div>
        <div className="kpi"><Users /><span>Одиниць на складі</span><strong>{totalStock}</strong></div>
      </div>
      <div className="admin-layout">
        <div className="admin-card">
          <h3>Товари</h3>
          <table>
            <thead><tr><th>Назва</th><th>Категорія</th><th>Ціна</th><th>Склад</th></tr></thead>
            <tbody>
              {products.map(p => <tr key={p.id}><td>{p.name}</td><td>{p.category}</td><td>{p.price.toLocaleString('uk-UA')}</td><td>{p.stock}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <h3>Замовлення</h3>
          <table>
            <thead><tr><th>№</th><th>Покупець</th><th>Сума</th><th>Статус</th></tr></thead>
            <tbody>
              {mockOrders.map(o => <tr key={o.id}><td>{o.id}</td><td>{o.customer}</td><td>{o.total.toLocaleString('uk-UA')}</td><td>{o.status}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
