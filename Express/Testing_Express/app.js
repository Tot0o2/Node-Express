const express = require('express')
const mainRouter = require("./src/routes/mainRoutes")
const userRouter = require("./src/routes/userRouter")

const bodyParser = require('body-parser')

const app = express();
const PORT = 3000

app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/user', userRouter)
app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);  
})
