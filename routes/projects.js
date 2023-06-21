var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects');

// GET /projects
router.get('/', projectsCtrl.index);
// GET /projects/new
router.get('/new', projectsCtrl.new);
// GET /projects/:id
router.get('/:id', projectsCtrl.show);
// GET /projects/:id/edit
router.get('/:id/edit', projectsCtrl.edit);
// POST /projects
router.post('/', projectsCtrl.create);
// PUT /projects/:id
router.put('/:id', projectsCtrl.update);
// DELETE /projects/:id
router.delete('/:id', projectsCtrl.delete);

module.exports = router;
