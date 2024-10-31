//Realiza a conexão com o banco de dados jobtb

const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});
//Essas variaveis de ambiente se encontram no .env que sao minhas variaiveis de ambiente. Serve para
//Nao inserirmos diretamente as conexados do banco de dados (Seguranca)
module.exports = connection;