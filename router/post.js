const express = require('express');
const router = express.Router();  
const posts = require('../data/menu.js');
// Importa il file menuControllers.js
const  menuControllers = require('../controllers/menuControllers.js');

//index
router.get('/', menuControllers.index);

//show
router.get('/:id', menuControllers.show);

//store
router.post('/', menuControllers.store);

//update
router.put('/:id', menuControllers.update);

//modifica
router.patch('/:id', menuControllers.patch);

//delete
router.delete('/:id', menuControllers.destroy);

module.exports = router;