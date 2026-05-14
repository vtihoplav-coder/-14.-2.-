import { CreditCard, Truck, CheckCircle2 } from 'lucide-react';

export default function Checkout({ cart, onBack, onSubmit }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="checkout-page">
      <div className="section-title">
        <p>Оформлення замовлення</p>
        <h2>Доставка та оплата</h2>
      </div>
      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <label>ПІБ покупця<input required defaultValue="Тихоплав Вячеслав Іванович" /></label>
          <label>Телефон<input required defaultValue="+380 99 000 00 00" /></label>
          <label>Місто<input required defaultValue="Київ" /></label>
          <label>Адреса доставки<input required defaultValue="Відділення Нової пошти №1" /></label>
          <div className="option-box">
            <Truck />
            <div><strong>Доставка</strong><span>Нова пошта / курʼєрська доставка</span></div>
          </div>
          <div className="option-box">
            <CreditCard />
            <div><strong>Оплата</strong><span>Оплата карткою або післяплата</span></div>
          </div>
          <div className="form-actions">
            <button type="button" className="ghost" onClick={onBack}>Назад</button>
            <button type="submit"><CheckCircle2 size={18} /> Підтвердити</button>
          </div>
        </form>
        <aside className="order-summary">
          <h3>Склад замовлення</h3>
          {cart.map(item => (
            <div className="summary-line" key={item.id}>
              <span>{item.name} × {item.qty}</span>
              <strong>{(item.price * item.qty).toLocaleString('uk-UA')} грн</strong>
            </div>
          ))}
          <div className="summary-total"><span>До сплати</span><b>{total.toLocaleString('uk-UA')} грн</b></div>
        </aside>
      </div>
    </section>
  );
}
