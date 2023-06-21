const Location = require('../models/location');

const index = async (req, res) => {
  const locations = await Location.find({});
  res.render('locations/index', {locations, title: 'Locations'});
};

const newLocation = (req, res) => {
  res.render('locations/new', {errorMsg: '', title: 'Add New Location'});
};


module.exports = {
  index,
  new: newLocation
}