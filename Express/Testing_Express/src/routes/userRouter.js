const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/create', userController.addUser)

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getUser)

router.put('/update/:id', userController.updateUser)

router.delete('/delete/:id', userController.deleteUser)

module.exports = router
