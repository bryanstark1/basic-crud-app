const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
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
    default: 
    // '1973-03'
    (() => {
      const date = new Date('1973-03-01');
      return date;
    })
  }
});

module.exports = mongoose.model('Projects', projectSchema)