const express = require('express');
const PetService = require('../services/pet');

const petRouter = express.Router();

// POST - CREATE PET
petRouter.post('/', (req, res) => {

    const {owner, type, name, age} = req.body;


    PetService.create(owner, type, name, age)
    .then( _ => {

      res.json({message: `${name} added to db with owner ${owner}`});
    }).catch( err => {

      res.json(err);
    });
  
});

// GET - READ PET
petRouter.get('/:id', (req, res) => {
  const {id} = req.params;

  PetService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.toString());
    })
});

// PUT - UPDATE PET
petRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  const {owner, type, name, age} = req.body;

  PetService.update(id, owner, type, name, age)
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

// DELETE - DELETE PET
petRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  PetService.delete(id)
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


module.exports = petRouter;