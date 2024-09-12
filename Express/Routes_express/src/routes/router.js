const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send()
})

router.get('/bienvenue', (req, res) => {
  res.send('<h1>Bienvenue sur la page de bienvenue')
})

router.get('/info', (req, res) => {
  res.json({name: 'Thomas', age: 22})
})

router.get('/redirection-acceuil', (req, res) => {
  res.redirect('/')
})

router.get('/acces-interdit', (req, res) => {
  res.status(403).send('403 - Acces denied')
})

router.get('*', (req, res) => {
  res.status(404).send('404 - Page non trouvée')
})

module.exports = router