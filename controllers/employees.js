const Employee = require('../models/employee');

const index = async (req, res) => {
  const employees = await Employee.find({});
  res.render('employees/index', {employees, title: 'Employees'});
};

const newEmployee = (req, res) => {
  res.render('employees/new', {errorMsg: '', title: 'Add New Employee'});
};

const create = async (req, res) => {
  try {
    await Employee.create(req.body);
    res.redirect('/employees');
  } catch (err) {
    console.log(err);
    res.render('employees/new', {errorMsg: err.message});
  };
};


module.exports = {
  index,
  new: newEmployee,
  create
}