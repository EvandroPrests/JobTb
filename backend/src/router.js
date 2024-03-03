const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

//Middlware serve para validar as informações que são inseridas no banco de Dados
router.get('/tasks', tasksController.getALL);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);   
router.delete('/tasks/:id', tasksController.deleteTask);   
router.put('/tasks/:id', 
tasksMiddleware.validateFieldTitle,
tasksMiddleware.validateFieldStatus, 
tasksController.updateTask);   

module.exports = router;