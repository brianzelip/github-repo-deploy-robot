const express = require('express');
const router = express.Router();
const repoController = require('../controllers/repoController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', repoController.landingPage);

module.exports = router;
