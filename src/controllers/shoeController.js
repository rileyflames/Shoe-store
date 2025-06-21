// src/controllers/shoeController.js
import Shoe from '../models/Shoe.js';

// @desc   Get all shoes
// @route  GET /api/shoes
export const getShoes = async (req, res, next) => {
  try {
    const shoes = await Shoe.find({ deleted: false });
    res.json(shoes);
  } catch (err) {
    next(err); // let our error handler deal with it
  }
};


// @desc   Get a single shoe
// @route  GET /api/shoes/:id
export const getShoeById = async (req, res, next) => {
  try {
    const shoe = await Shoe.findById(req.params.id);

    if (!shoe || shoe.deleted) {
      res.status(404);
      throw new Error('Shoe not found');
    }

    res.json(shoe);
  } catch (err) {
    next(err); // Pass to the error handler
  }
};


// @desc   Create a new shoe
// @route  POST /api/shoes
export const createShoe = async (req, res, next) => {
  try {
    const newShoe = await Shoe.create(req.body);
    res.status(201).json(newShoe);
  } catch (err) {
    res.status(400); // tell middleware this is a bad request
    next(err);
  }
};


// @desc   Update a shoe
// @route  PUT /api/shoes/:id
export const updateShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe || shoe.deleted) {
      res.status(404);
      throw new Error('Shoe not found');
    }

    Object.assign(shoe, req.body);
    await shoe.save();
    res.json(shoe);
  } catch (err) {
    next(err);
  }
};


// @desc   Delete a shoe
// @route  DELETE /api/shoes/:id
export const deleteShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe || shoe.deleted) {
      res.status(404);
      throw new Error('Shoe not found or already deleted');
    }

    shoe.deleted = true;
    await shoe.save();
    res.json({ message: 'Shoe soft-deleted' });
  } catch (err) {
    next(err);
  }
};


