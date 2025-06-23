const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const statsRoutes = require("./routes/stats");


require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Health-check route
app.get('/', (req, res) => res.send('API is running'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/stats', require('./routes/stats'))
app.use("/api/stats", statsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Server Error', error: err.message });
});

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
