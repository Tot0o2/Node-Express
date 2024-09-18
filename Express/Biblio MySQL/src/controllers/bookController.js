const Book = require('../models/book')


const bookController = {
  addBook: (req, res) => {
    const bookData = req.body;
    Book.addBook(bookData, (err) => {
      if (err) throw err;
      res.send('Livres ajouté avec succès !')
    })
  },
  getAllBooks: (req, res) => {
    Book.getAllBooks((err, result) => {
      if (err) throw err;
      res.json(result);
    })
  },
  getBook: (req, res) => {
    const bookId = req.params.id;
    Book.getBook(bookId, (err, result) => {
      if (err) throw err;
      res.json(result);
    })
  },
  updateBook: (req, res) => {
    const bookData = req.body;
    const bookId = req.params.id;
    Book.updateBook(bookData, bookId, (err) => {
      if (err) throw err;
      res.send('Livre modifié avec succès !');
    })
  },
  deleteBook: (req, res) => {
    const bookId = req.params.id;
    Book.deleteBook(bookId, (err) => {
      if (err) throw err;
      res.send('Utilisateur supprimé avec succès !');
    })
  }
}

module.exports = bookController