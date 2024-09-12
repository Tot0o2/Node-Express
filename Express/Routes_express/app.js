const express = require('express')

const app = express();
const PORT = 3000

const mainRouter = require("./src/routes/router")

app.use(express.static('views'))
app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);  
})