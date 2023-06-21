const Employee = require('../models/employee');

const index = async (req, res) => {
  const employees = await Employee.find({});
  res.render('employees/index', {employees, title: 'Employees'});
};

const newEmployee = (req, res) => {
  res.render('employees/new', {errorMsg: '', title: 'Add New Employee'});
};


module.exports = {
  index,
  new: newEmployee
}