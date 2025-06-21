// src/app.js
import express from 'express';
import shoeRoutes from './routes/shoeRoutes.js'

const app = express();

// Middleware
app.use(express.json());

app.use('/api',shoeRoutes )

// Basic route
app.get('/', (req, res) => {
  res.send('Shoe Store API is live!');
});

export default app;
