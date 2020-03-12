const express = require('express');
const router = express.Router();

let counter = 0;
let quotes = [{
    id: counter++,
    author: 'kot',
    quote: 'Ala ma kota'
}];

router.get('/', (req, res) => {
  res.send(quotes);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = quotes.find( q => q.id === id );
  if (result) {
    res.send(result);
  } else {
    res.send(404);
  }
});

router.post('/', (req, res) => {
  const {author, text} = req.body;
  if (text) {
    const newQuote = {
      id: counter++,
      author: author || "anonim",
      text: text
    };

    quotes = quotes.concat(newQuote);
    res.send(201, quotes);
  } else {
    res.send(400);
  }
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  if( quotes.find( q => q.id === id ) ){
    quotes = quotes.filter( q => q.id !== id );
    res.send(204);
  } else {
    res.send(404);
  }
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const reqQuote = quotes.find( q => q.id === id );
  const {author, text} = req.body;

  if( reqQuote && text ){
    const newQuote = {
      id: id,
      author: author || "anonim",
      text: text
    };
    quotes = quotes.map( q => q===reqQuote ? newQuote : q );
    res.send(201, quotes);
  } else if ( !reqId ) {
    res.send(404);
  } else {
    res.send(400);
  }
});

module.exports = router;