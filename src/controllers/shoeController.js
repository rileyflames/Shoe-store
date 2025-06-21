// src/controllers/shoeController.js
import Shoe from '../models/Shoe.js';

// @desc   Get all shoes
// @route  GET /api/shoes
export const getShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    // success?
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Get a single shoe
// @route  GET /api/shoes/:id
export const getShoeById = async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) return res.status(404).json({ message: 'Shoe not found' });
    //success?
    res.status(200).json(shoe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Create a new shoe
// @route  POST /api/shoes
export const createShoe = async (req, res) => {
  try {
    const newShoe = new Shoe(req.body);
    const savedShoe = await newShoe.save();
    //success?
    res.status(201).json(savedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Update a shoe
// @route  PUT /api/shoes/:id
export const updateShoe = async (req, res) => {
  try {
    const updatedShoe = await Shoe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedShoe) return res.status(404).json({ message: 'Shoe not found' });
    // success?
    res.status(200).json(updatedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Delete a shoe
// @route  DELETE /api/shoes/:id
export const deleteShoe = async (req, res) => {
  try {
    const deleted = await Shoe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Shoe not found' });
    //success?
    res.status(200).json({ message: 'Shoe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
