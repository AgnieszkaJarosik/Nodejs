const express = require('express');
const router = express.Router();

let count = 0;

let tasks = [
  {
    id: count++,
    task: "wypić kawę",
    status: 'waiting'
  },
];

router.get('/', (req, res) => {
  res.send(tasks);
});

router.get('/id/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find( t => t.id === id );
  if (task) {
    res.send(task);
  } else {
    res.send(404);
  }
});

router.get('/status/:done?', (req, res) => {
  const status = req.params.done;
  const items = tasks.filter( t => {
    if (status === 'done') {
      return t.status === 'done';
    } else if (status === 'waiting') {
      return t.status === 'waiting';
    } else {
      return t;
    }
  });
  if (items) {
    res.send(items);
  } else {
    res.send(404);
  }
});

router.post('/', (req, res) => {
  const { task } = req.body;
  
  if (task) {
    const newTask = {
      id: count++,
      task,
      done: false
    }
    tasks = tasks.concat(newTask);
    res.send(201, tasks);
  } else {
    res.send(404);
  }
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = tasks.find( t => t.id === id );
  if (item) {
    tasks = tasks.filter( task => task !== item );
    res.send(200);
  } else {
    res.send(404);
  }
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = tasks.find( t => t.id === id );
  if (item) {
    if (req.body.task) {
      const newTask = {
        id: id,
        task: req.body.task,
        done: false
      }
      tasks = tasks.map( task => task===item ? newTask : task );
      res.send(200);
    } else {
      res.send(400);
    }
  } else {
    res.send(404);
  }
});

router.patch('/:id', function (req, res) {
  const id = Number(req.params.id);
  const status = req.body.status;
  const item = tasks.find( t => t.id === id );
  if (item) {
    if (status) {
      tasks = tasks.map( task => {
        if (task===item) {
          const newTask = task;
          newTask.status = status;
          return newTask;
        } else {
          return task = task;
        }
      });
      res.send(200, tasks);
    } else {
      res.send(400);
    }
  } else {
    res.send(404);
  }
});

module.exports = router;