const Location = require('../models/location');

const index = async (req, res) => {
  const locations = await Location.find({});
  res.render('locations/index', {locations, title: 'Locations'});
};


module.exports = {
  index
}