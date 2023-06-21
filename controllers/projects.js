const Project = require('../models/project');

const index = async (req, res) => {
  const projects = await Project.find({});
  res.render('projects/index', {projects, title: 'Projects'});
};

const newProject = (req, res) => {
  res.render('projects/new', {errorMsg: '', title: 'Add New Project'});
};


module.exports = {
  index,
  new: newProject
}