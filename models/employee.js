const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  position: {
    type: String,
    default: 'Employee'
  },
  image: {
    type: String,
    default: 'https://seeklogo.com/images/S/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png'
  },
  description: {
    type: String,
    default: ''
  },
  firstAppear: {
    type: Date,
    default: 'March 1973'
  }
});

module.exports = mongoose.model('Employees', employeeSchema);