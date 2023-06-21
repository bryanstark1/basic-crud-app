const Employee = require('../models/employee');

const index = async (req, res) => {
  const employees = await Employee.find({});
  res.render('employees/index', {employees, title: 'Employees'});
};


module.exports = {
  index
}