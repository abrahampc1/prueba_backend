const mysql = require('mysql2');
require('dotenv').config(); 

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

console.log('Configuración de conexión:', config);

const pool = mysql.createPool(config);

module.exports = pool.promise();
