require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'App Start Successfully' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
