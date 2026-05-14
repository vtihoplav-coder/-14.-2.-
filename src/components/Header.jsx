import { ShoppingCart, Store, ShieldCheck } from 'lucide-react';

export default function Header({ cartCount, onCartClick, onAdminClick, activeSection }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon"><Store size={24} /></div>
        <div>
          <h1>Магазин</h1>
          <p>онлайн-система продажу товарів</p>
        </div>
      </div>
      <nav className="top-nav">
        <button className={activeSection === 'shop' ? 'nav-active' : ''}>Каталог</button>
        <button onClick={onAdminClick} className={activeSection === 'admin' ? 'nav-active' : ''}>
          <ShieldCheck size={18} /> Адмін-панель
        </button>
        <button className="cart-button" onClick={onCartClick}>
          <ShoppingCart size={19} /> Кошик <span>{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}
