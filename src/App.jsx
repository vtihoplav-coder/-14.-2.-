import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import CartPanel from './components/CartPanel.jsx';
import Checkout from './components/Checkout.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import { categories, products as initialProducts } from './data/products.js';

export default function App() {
  const [products] = useState(initialProducts);
  const [category, setCategory] = useState('Усі товари');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState('shop');
  const [notice, setNotice] = useState('');

  const filtered = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = category === 'Усі товари' || product.category === category;
      const textMatch = product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && textMatch;
    });
  }, [category, query, products]);

  const addToCart = (product) => {
    setCart(current => {
      const exists = current.find(item => item.id === product.id);
      if (exists) return current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...current, { ...product, qty: 1 }];
    });
    setNotice(`Товар «${product.name}» додано до кошика`);
    setTimeout(() => setNotice(''), 2400);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const inc = id => setCart(items => items.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  const dec = id => setCart(items => items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item));
  const remove = id => setCart(items => items.filter(item => item.id !== id));

  const confirmOrder = () => {
    setCart([]);
    setPage('shop');
    setNotice('Замовлення успішно оформлено. Менеджер звʼяжеться з покупцем.');
    setTimeout(() => setNotice(''), 3500);
  };

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onAdminClick={() => setPage(page === 'admin' ? 'shop' : 'admin')}
        activeSection={page}
      />
      {notice && <div className="toast">{notice}</div>}

      {page === 'checkout' ? (
        <Checkout cart={cart} onBack={() => setPage('shop')} onSubmit={confirmOrder} />
      ) : page === 'admin' ? (
        <AdminPanel products={products} />
      ) : (
        <main>
          <section className="hero">
            <div className="hero-content">
              <span className="label">Робочий проєкт програмної системи</span>
              <h2>Онлайн-магазин з каталогом, кошиком та оформленням замовлень</h2>
              <p>Система забезпечує пошук товарів, перегляд характеристик, додавання до кошика, оформлення замовлення та базове адміністрування.</p>
              <div className="hero-actions">
                <button onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}>Перейти до каталогу</button>
                <button className="ghost-light" onClick={() => setPage('admin')}>Панель менеджера</button>
              </div>
            </div>
          </section>

          <section className="catalog" id="catalog">
            <div className="section-title">
              <p>Каталог товарів</p>
              <h2>Товари магазину</h2>
            </div>
            <div className="toolbar">
              <div className="search-box"><Search size={18} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Пошук товару..." /></div>
              <div className="chips">
                {categories.map(item => <button key={item} className={item === category ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
              </div>
            </div>
            <div className="product-grid">
              {filtered.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart} onDetails={setSelected} />)}
            </div>
          </section>
        </main>
      )}

      <CartPanel
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
        onCheckout={() => { setCartOpen(false); setPage('checkout'); }}
      />

      {selected && (
        <div className="overlay">
          <div className="modal">
            <button className="icon-button modal-close" onClick={() => setSelected(null)}><X /></button>
            <img src={selected.image} alt={selected.name} />
            <div className="modal-content">
              <span className="badge">{selected.category}</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <ul>{selected.specs.map(s => <li key={s}>{s}</li>)}</ul>
              <div className="price-row">
                <strong>{selected.price.toLocaleString('uk-UA')} грн</strong>
                <button onClick={() => { addToCart(selected); setSelected(null); }}>Додати до кошика</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
