import { Star, PackageCheck } from 'lucide-react';

export default function ProductCard({ product, onAdd, onDetails }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <div className="product-row">
          <span className="badge">{product.category}</span>
          <span className="rating"><Star size={15} /> {product.rating}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="stock"><PackageCheck size={16} /> На складі: {product.stock}</div>
        <div className="price-row">
          <strong>{product.price.toLocaleString('uk-UA')} грн</strong>
          <div className="actions">
            <button className="ghost" onClick={() => onDetails(product)}>Деталі</button>
            <button onClick={() => onAdd(product)}>До кошика</button>
          </div>
        </div>
      </div>
    </article>
  );
}
