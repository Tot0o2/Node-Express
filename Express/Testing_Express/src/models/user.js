const connection = require('../../config/db')

class User {
  static addUser(userData, callback) {
    connection.query('INSERT INTO Users VALUES ?', userData, callback)
  }
  static getAllUsers(callback) {
    connection.query("SELECT * FROM Users", callback)
  }
  static getUser(userId, callback) {
    connection.query("SELECT nom, email FROM Users WHERE id = ?", userId, callback)
  }
  static updateUser(userData, userId, callback) {
    connection.query("UPDATE Users SET ? WHERE id = ?", [userData, userId], callback)
  }
  static deleteUser(userId, callback) {
    connection.query("DELETE FROM Users WHERE id = ?", userId, callback)
  }
}

module.exports = User