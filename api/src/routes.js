const express = require('express');
const PessoasController = require('./controllers/PessoasController');

const routes = express.Router();

//CONTROLLERS

routes.get('/people/:search?', PessoasController.index);

routes.get('/person/:person_id', PessoasController.getPersonById);

routes.put('/person/:person_id', PessoasController.updatePersonById);

routes.delete('/person/:person_id', PessoasController.deletePerson);

routes.post('/person', PessoasController.createPerson);

module.exports = routes;