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

const show = (req, res) => {
  Employee.findById(req.params.id).then((employee) => {
    res.render('employees/show', {
      employee,
      title: "Employee Details"
    });
  });
};


module.exports = {
  index,
  new: newEmployee,
  create,
  show
};