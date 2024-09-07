const tasksModel = require('../models/tasksModel');


const getALL = async (_request, response) => {

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
};
//Pega o corpo da requisição e envia para o cliente como resposta
const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);

    return response.status(201).json(createdTask);
};
//deleta a task no Banco de Dados
const deleteTask = async (request, response) =>{
    const { id } = request.params;

    await tasksModel.deleteTask(id);
    return response.status(204).json();
};
//Atualizar task

const updateTask = async (request, response) =>{
    const { id } = request.params;

    await tasksModel.updatedTask(id, request.body);
    return response.status(204).json();

};

module.exports = {
    getALL,
    createTask,
    deleteTask,
    updateTask,
}