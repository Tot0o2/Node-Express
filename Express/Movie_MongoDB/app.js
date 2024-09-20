const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const movieRouter = require('./src/routes/movieRoutes')

const app = express();
const PORT = process.env.PORT

mongoose.connect("mongodb://localhost:27017/cinema");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
})

app.use(bodyParser.json())
app.use(cors())
app.use('/movies', movieRouter)

app.listen(PORT, () => {
  console.log(`Serveur is listening at <http://localhost:${PORT}>`);
})