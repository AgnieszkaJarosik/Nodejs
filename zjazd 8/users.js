const express = require('express');
const router = express.Router();

let counter = 0;

let users = [
  {
    id: counter++,
    name: "Anna Nowak",
    email: "anowak@gmail.com"
  }
];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const {name, email} = req.body;
  if (name && email) {
    const newUser = {
      id: counter++,
      name,
      email
    }
    users = users.concat(newUser);
    res.send(201, users);
  } else {
    res.send(400);
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usersLenBefore = users.length;
  users = users.filter( person => person.id !== id );
  if (usersLenBefore > users.length) {
    res.send(200, users);
  } else {
    res.send(404);
  }
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find( u => u.id === id );
  const { newName, newEmail } = req.body;

  if (user) {
    if ( newName || newEmail ) {
      const editUser = {
        id,
        name: newName || name,
        email: newEmail || email
      }

      users = users.map( person => person===user ? editUser : person );
      res.send(200, users);
    } else {
      res.send(400);
    }
  } else {
    res.send(404);
  }
});

module.exports = router;