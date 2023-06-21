const Location = require('../models/location');

const index = async (req, res) => {
  const locations = await Location.find({});
  res.render('locations/index', {locations, title: 'Locations'});
};

const newLocation = (req, res) => {
  res.render('locations/new', {errorMsg: '', title: 'Add New Location'});
};

const create = async (req, res) => {
  try {
    await Location.create(req.body);
    res.redirect('/locations');
  } catch (err) {
    console.log(err);
    res.render('locations/new', {errorMsg: err.message});
  };
};

const show = (req, res) => {
  Location.findById(req.params.id).then((location) => {
    res.render('locations/show', {
      location,
      title: 'Location Details'
    });
  });
};

const edit = (req, res) => {
  Location.findById(req.params.id).then((location) => {
    res.render('locations/edit', {
      location,
      title: 'Edit Location'
    });
  });
};


module.exports = {
  index,
  new: newLocation,
  create,
  show,
  edit
}