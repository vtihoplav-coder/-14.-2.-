export const categories = [
  'Усі товари',
  'Смартфони',
  'Ноутбуки',
  'Аксесуари',
  'Побутова техніка'
];

export const products = [
  {
    id: 1,
    name: 'SmartPhone X12',
    category: 'Смартфони',
    price: 18499,
    stock: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    description: 'Смартфон з OLED-екраном, 128 ГБ памʼяті та швидкою зарядкою.',
    specs: ['OLED 6.4”', '128 ГБ', 'Камера 50 Мп', '5G']
  },
  {
    id: 2,
    name: 'Notebook Pro 15',
    category: 'Ноутбуки',
    price: 34999,
    stock: 7,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    description: 'Потужний ноутбук для навчання, роботи та розробки програмного забезпечення.',
    specs: ['Intel i7', '16 ГБ RAM', 'SSD 512 ГБ', '15.6” IPS']
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    category: 'Аксесуари',
    price: 2499,
    stock: 31,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    description: 'Бездротові навушники з активним шумозаглушенням.',
    specs: ['Bluetooth 5.3', 'ANC', '40 год роботи', 'USB-C']
  },
  {
    id: 4,
    name: 'Smart Watch Fit',
    category: 'Аксесуари',
    price: 3999,
    stock: 18,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description: 'Смарт-годинник для контролю активності, сну та повідомлень.',
    specs: ['AMOLED', 'GPS', 'Пульсометр', 'Вологозахист']
  },
  {
    id: 5,
    name: 'Coffee Machine Barista',
    category: 'Побутова техніка',
    price: 12999,
    stock: 5,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80',
    description: 'Кавомашина з автоматичним капучинатором і налаштуванням міцності.',
    specs: ['15 бар', 'Капучинатор', '1.8 л', 'Автоочищення']
  },
  {
    id: 6,
    name: 'Tablet Air 11',
    category: 'Смартфони',
    price: 15999,
    stock: 9,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    description: 'Планшет для навчання, читання, перегляду відео та роботи з документами.',
    specs: ['11” Retina', 'Wi-Fi 6', '128 ГБ', 'Стилус']
  }
];

export const mockOrders = [
  { id: 1001, customer: 'Іван Коваленко', total: 18499, status: 'Нове' },
  { id: 1002, customer: 'Олена Петренко', total: 37498, status: 'Оплачено' },
  { id: 1003, customer: 'Марія Сидоренко', total: 6498, status: 'Доставляється' }
];
