//importo expreess
const express = require('express');
//inizializzo express nella variabile  app
const app = express();
//deefinisco il numero di porta
const port = 3000;

//imposto asset statici
app.use(express.static('imgs'));

// Indico ad express di trattare le richieste body in formato JSON
app.use(express.json());

//importo il router
const postsRouter = require('./router/post.js'); 

// uso post router per creare le rotte
app.use('/menu', postsRouter);

//definisco la rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog!');
});

//server che ascolta sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su ${port}`);
   
});

console.log('Server in ascolto su 3000');