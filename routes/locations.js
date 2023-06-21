var express = require('express');
var router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /locations
router.get('/', locationsCtrl.index);
// GET /locations/new
router.get('/new', locationsCtrl.new);
// GET /locations/:id
router.get('/:id', locationsCtrl.show);
// POST /locations
router.post('/', locationsCtrl.create);

module.exports = router;
