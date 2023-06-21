var express = require('express');
var router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /locations
router.get('/', locationsCtrl.index);

module.exports = router;
