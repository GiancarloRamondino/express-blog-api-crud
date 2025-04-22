const express = require('express');
const router = express.Router();    
const posts = require('../data/menu.js'); // Importa il file posts.js

//index
router.get('/', function(req, res) {
    res.json(posts);
});

//show
router.get('/:id', function(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id); // cerca il post con ID
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Ricetta non trovata.');
    }
});

//store
router.post('/', function(req, res) {
    res.send('creazione del menu!');
});

//update
router.put('/:id', function(req, res) {
    const id = req.params.id;
    if (posts[id]) {
        posts[id] = req.body; // aggiorna il post nell'array
        res.status(200).json(posts); // restituisce l'array aggiornato
    } else {
        res.status(404).send('Post non trovato.');
    }
});

//modifica
router.patch('/:id', function(req, res) {
    const id = req.params.id;
    if (posts[id]) {
        posts.splice(id, 1); // rimuove il post dall'array
        posts.push(req.body); // aggiunge il nuovo post all'array
        res.status(200).json(posts); // restituisce l'array aggiornato
        console.log(posts); // log per il server
    } else {
        res.status(404).send('Post non trovato.');
    }
});

//delete
router.delete('/:id', function(req, res) {
    const id = req.params.id;
    if (posts[id]) {
        posts.splice(id, 1); // rimuove il post dall'array
        res.status(200).send(``);
        console.log(posts); // log per il server
    } else {
        res.status(404).send('Post non trovato.');
    }
});

module.exports = router;