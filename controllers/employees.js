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

const edit =(req, res) => {
  Employee.findById(req.params.id).then((employee) => {
    res.render('employees/edit', {
      employee,
      title: "Edit Employee"
    });
  });
};

const update = async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.redirect(`/employees/${req.params.id}`);
  } catch (err) {
    res.render(`/employees/${req.params.id}/edit`, {
      errorMsg: err.message,
      title: 'Edit Employee'
    });
  };
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndRemove(req.params.id);
    res.redirect('/employees');
  } catch (err) {
    res.render('/employees', {
      errorMsg: err.message,
      title: 'Employees'
    });
  };
};


module.exports = {
  index,
  new: newEmployee,
  create,
  show,
  edit,
  update,
  delete: deleteEmployee
};