// src/app.js
import express from 'express';
import shoeRoutes from './routes/shoeRoutes.js';
import errorHandler from 'middleware/errorHandler.js';

const app = express();

// Middleware
app.use(express.json());

app.use('/api',shoeRoutes )

// Basic route
app.get('/', (req, res) => {
  res.send('Shoe Store API is live!');
});

// 404 route for unmatched routes
app.use((req, res, next)=>{
  res.status(404);
  next(new Error(`Not Found - ${req.originalUrl}`))
})

// custom error handler

app.use(errorHandler);

export default app;
