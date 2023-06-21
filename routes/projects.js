var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects');

// GET /projects
router.get('/', projectsCtrl.index);
// GET /projects/new
router.get('/new', projectsCtrl.new);
// POST /projects
router.post('/', projectsCtrl.create);

module.exports = router;
