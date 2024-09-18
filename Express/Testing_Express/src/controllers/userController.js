const User = require('../models/user')

const addUser = (req, res) => {
  const userData = req.body;
  User.addUser(userData, (err) => {
    if (err) throw err;
    res.send("Utilisateur ajouté avec succès !");
  });
};
const getAllUsers = (req, res) => {
  User.getAllUsers((err, result) => {
    if (err) throw err;
    res.json(result);
  })
};

const getUser = (req, res) => {
  const userId = req.params.id;
  User.getUser(userId, (err, result) => {
      if (err) throw err;
      res.json(result);
  })
};

const updateUser = (req, res) => {
  const userData = req.body;
  const userId = req.params.id;
  User.updateUser(userData, userId, (err) => {
    if (err) throw err;
    res.send("Utilisateur modifé avec succès !");
  })
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.deleteUser(userId, (err) => {
    if (err) throw err;
    res.send("Utilisateur supprimé avec succès !");
  })
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
