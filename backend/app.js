const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 699.99 },
  { id: 3, name: 'Headphones', price: 149.99 },
  { id: 4, name: 'Keyboard', price: 79.99 },
  { id: 5, name: 'Mouse', price: 49.99 }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express Products API' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
