var express = require('express');
var router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /locations
router.get('/', locationsCtrl.index);
// GET /locations/new
router.get('/new', locationsCtrl.new);
// GET /locations/:id
router.get('/:id', locationsCtrl.show);
// GET /locations/:id/edit
router.get('/:id/edit', locationsCtrl.edit);
// POST /locations
router.post('/', locationsCtrl.create);
// PUT /locations/:id
router.put('/:id', locationsCtrl.update);

module.exports = router;
