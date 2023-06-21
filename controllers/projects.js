const Project = require('../models/project');

const index = async (req, res) => {
  const projects = await Project.find({});
  res.render('projects/index', {projects, title: 'Projects'});
};


module.exports = {
  index
}