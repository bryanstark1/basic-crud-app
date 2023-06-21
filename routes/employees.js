var express = require('express');
var router = express.Router();
const employeesCtrl = require('../controllers/employees');

// GET /employees
router.get('/', employeesCtrl.index);

module.exports = router;
