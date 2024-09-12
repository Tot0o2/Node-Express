const express = require('express');
const router = express.Router();

const firstController = require('../controllers/firstController')

router.get('/', firstController.homePage)

router.get('/bienvenue', firstController.bienvenuePage)

router.get('/info', firstController.infoPage)

router.get('/redirection-acceuil', firstController.redirect)

router.get('/acces-interdit', firstController.forbiddenPage)

router.get('*', firstController.badRoute)

module.exports = router