const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')

router.post('/add_movie', movieController.addMovie)
router.get('/', movieController.getAllMovies)
router.get('/:title', movieController.getOneMovie)
router.put('/update/:id', movieController.updateMovie)
router.delete('/delete/:id', movieController.deleteMovie)

module.exports = router