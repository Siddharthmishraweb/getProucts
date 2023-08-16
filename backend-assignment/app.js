const express = require('express');
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const User = require('./models/User')
const Product = require('./models/Product')
const bcrypt = require('bcryptjs');
const jsonData = require('./data.json'); // Replace with your JSON data file path


// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', analyticsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

