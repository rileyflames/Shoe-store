import express from 'express';

import{
    getShoes,
    getShoeById,
    createShoe,
    updateShoe,
    deleteShoe
} from '../controllers/shoeController.js';

const router = express.Router();

// create the routes
router.get('/shoes', getShoes) // get all goes

router.get('/shoes/:id', getShoeById) // get shoe by id

router.post('/shoes', createShoe) // create a shoe

router.put('/shoes/:id', updateShoe) // update a shoe

router.delete('/shoes/:id', deleteShoe) // delete a shoe

export default router;