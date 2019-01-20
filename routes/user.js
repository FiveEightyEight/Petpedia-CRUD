const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {

    const {name, email} = req.body;

    UserService.create(name, email)
    .then( _ => {

      res.json({message: `${name} added to db`});
    }).catch( err => {

      res.json(err);
    });
  
});

// GET - READ USER
userRouter.get('/:id', (req, res) => {
  const {id} = req.params;

  UserService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.toString());
    })
});

// PUT - UPDATE USER
userRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  const {name, email} = req.body;

  UserService.update(id, name, email)
  .then( _ => {
    res.json({
      success: 'done',
    })
  }).catch ( err => {
    res.json({
      message: err,
    })
  })
});

// DELETE - DELETE USER
userRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  UserService.delete(id)
  .then( _ => {
    res.json({
      success: 'deleted',
    })
  }).catch ( err => {
    res.json({
      message: err,
    })
  })
});


module.exports = userRouter;