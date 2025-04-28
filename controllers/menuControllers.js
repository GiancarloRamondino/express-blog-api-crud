const posts = require('../data/menu.js'); // Importa il file posts.js
 
//index
function index (req, res) {
    console.log(posts[0]);
    console.log(posts.find(p => p.id === 0));
    res.json(posts);
};

//show
function show (req, res) {
    const altro = parseInt(req.params.prova); // ottiene l'ID dalla richiesta
    const post = posts.find(p => p.id === altro); // cerca il post con ID
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({
            status: 'fallito',
            message: 'Non trovato',
          });
    }
};

//store
function store (req, res) {
    const newId = posts[posts.length - 1].id + 1; // calcola il nuovo ID
    const newPost = { 
        id: newId,  
        title: req.body.title ,
        content: req.body.content,
        image: req.body.image,
        tags: [req.body.tags],
    }; // crea un nuovo post con ID e dati del body
    posts.push(newPost), // aggiunge il nuovo post all'array
    res.status(201).json(newPost); // restituisce il nuovo post
};

//update modifica  totale
function update (req, res) {
    const id = parseInt(req.params.id);  // ottiene l'ID dalla URL in formato numerico
    const post = posts.find(p => p.id === id); // cerca il post con ID
    if (!post) {
        res.status(404);
        return res.json({ 
            error: 'Post non trovato.',
            message: 'Post non trovato.'
        }); 
    }
    posts.Id = req.body.id; // aggiorna l'ID del post
    posts.title = req.body.title; // aggiorna il titolo del post 
    posts.content = req.body.content; // aggiorna il contenuto del post
    posts.image = req.body.image; // aggiorna l'immagine del post
    posts.tags = req.body.tags; // aggiorna i tag del post
    res.status(200).json(post); // restituisce il post aggiornato
};

//modifica
function patch (req, res) {
    const id = parseInt(req.params.id);  // ottiene l'ID dalla URL in formato numerico
    const post = posts.find(p => p.id === id); // cerca il post con ID
    if (!post) {
        res.status(404);
        return res.json({ 
            error: 'Post non trovato.',
            message: 'Post non trovato.'
        }); 
    }
    posts.Id = req.body.id; // aggiorna l'ID del post
    posts.title = req.body.title; // aggiorna il titolo del post 
    posts.content = req.body.content; // aggiorna il contenuto del post
    posts.image = req.body.image; // aggiorna l'immagine del post
    posts.tags = req.body.tags; // aggiorna i tag del post
    res.status(200).json(post); // restituisce il post aggiornato
};

//delete
function destroy (req, res) {
    const id = req.params.id;
    if (posts[id]) {
        posts.splice(id, 1); // rimuove il post dall'array
        res.status(200).send(``);
        console.log(posts); // log per il server
    } else {
        res.status(404).json({
            status: 'fallito',
            message: 'non trovato',
       });
    }
};

// esporto i metodi pper usarli come proprietò  di un oggetto
module.exports = {index, show, store,  update, patch, destroy};