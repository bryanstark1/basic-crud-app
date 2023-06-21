var express = require('express');
var router = express.Router();
const employeesCtrl = require('../controllers/employees');
const employee = require('../models/employee');

// GET /employees
router.get('/', employeesCtrl.index);
// GET /employees/new
router.get('/new', employeesCtrl.new);
// GET /employees/:id
router.get('/:id', employeesCtrl.show);
// GET /employees/:id/edit
router.get('/:id/edit', employeesCtrl.edit);
// POST /employees
router.post('/', employeesCtrl.create);
// PUT /employees/:id
router.put('/:id', employeesCtrl.update);
// DELETE /employees/:id
router.delete('/:id', employeesCtrl.delete);

module.exports = router;
