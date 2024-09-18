const connection = require('../../config/db')

class Book {
  static addBook(bookData, callback) {
    connection.query('INSERT INTO books SET ?', bookData, callback)
  }
  static getAllBooks(callback) {
    connection.query('SELECT * FROM books', callback)
  }
  static getBook(bookId, callback) {
    connection.query('SELECT title, author, publication_year, available FROM books WHERE id = ?', bookId, callback)
  }
  static updateBook(bookData, bookId, callback) {
    connection.query('UPDATE books SET ? WHERE id = ?', [bookData, bookId], callback)
  }
  static deleteBook(bookId, callback) {
    connection.query('DELETE FROM books WHERE id = ?', bookId, callback)
  }
}

module.exports = Book
