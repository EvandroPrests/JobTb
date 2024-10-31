
// Depois vou ter que fazer as configuracoes de acordo com o que eu preciso no meu site

const connection = require('./connection');

//Função para consulta do Banco de dados
const getAll = async () =>{
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;   
};

//Função para criar uma task no Banco de Dados
const createTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks (title, status, create_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return {insertId: createdTask.insertId};
  
};

const deleteTask = async (id) => {
  const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removedTask;
}


const updatedTask = async (id, tasks) => {
//Essa linha de baixo title, status recebe o valor da tasks que está referida ali em cima
  const { title, status } = tasks;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
//O id é tirado do ()
  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updatedTask,
};