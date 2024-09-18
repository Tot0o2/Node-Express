const express = require('express')
const bookRouter = require('./src/routes/bookRoutes')
require('dotenv').config();

const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/book', bookRouter)


app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`); 
})