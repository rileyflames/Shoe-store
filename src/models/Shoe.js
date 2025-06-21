// src/models/Shoe.js
import mongoose from 'mongoose';

const shoeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
    },
    size: {
      type: [Number], // Example: [7, 8, 9.5]
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
    color: {
      type: String,
    },
    category: {
      type: String, // e.g., Running, Casual, Sports
    },
      deleted:{
        type: Boolean,
        default: false
      }
    
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const Shoe = mongoose.model('Shoe', shoeSchema);

export default Shoe;
