import { X, Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPanel({ open, cart, onClose, onInc, onDec, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!open) return null;

  return (
    <div className="overlay">
      <aside className="cart-panel">
        <div className="panel-header">
          <h2>Кошик</h2>
          <button className="icon-button" onClick={onClose}><X /></button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">Кошик порожній. Додайте товари з каталогу.</div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>{item.price.toLocaleString('uk-UA')} грн</p>
                    <div className="qty-row">
                      <button onClick={() => onDec(item.id)}><Minus size={16} /></button>
                      <span>{item.qty}</span>
                      <button onClick={() => onInc(item.id)}><Plus size={16} /></button>
                      <button className="danger" onClick={() => onRemove(item.id)}><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="total"><span>Разом:</span><strong>{total.toLocaleString('uk-UA')} грн</strong></div>
              <button className="full" onClick={onCheckout}>Оформити замовлення</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
