const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la BDD : ', err);
  } else {
    console.log('Connecté à la BDD MySQL');    
  }
})

module.exports = connection;