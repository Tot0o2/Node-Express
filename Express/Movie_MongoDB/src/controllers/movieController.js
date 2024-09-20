const Movie = require('../models/movie')


const movieController = {
  //Create
  addMovie: async(req, res) => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      res.status(201).json(newMovie)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  //Read
  getAllMovies: async(req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },
  getOneMovie: async(req, res) => {
    try {
      const movie = await Movie.findOne({ title: req.params.title});
      if (!movie) {
        return res.status(400).json({message: 'Film introuvable'})
      }
      res.json(movie)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },
  //Update
  updateMovie: async(req, res) => {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(req.params.id , req.body, {new: true});
      if (!updateMovie) {
        return res.status(400).json({message: 'Film introuvable'})
      }
      res.json(updateMovie)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },
  //Delete
  deleteMovie: async(req, res) => {
    try {
      const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
      if (!deleteMovie) {
        return res.status(400).json({message: 'Film introuvable'})
      }
      res.json({message: 'Film supperimé avec succès'})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }
}

module.exports = movieController