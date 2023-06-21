const Project = require('../models/project');

const index = async (req, res) => {
  const projects = await Project.find({});
  res.render('projects/index', {projects, title: 'Projects'});
};

const newProject = (req, res) => {
  res.render('projects/new', {errorMsg: '', title: 'Add New Project'});
};

const create = async (req, res) => {
  try {
    await Project.create(req.body);
    res.redirect('/projects');
  } catch (err) {
    console.log(err);
    res.render('projects/new', {errorMsg: err.message});
  };
};

const show = (req, res) => {
  Project.findById(req.params.id).then((project) => {
    res.render('projects/show', {
      project,
      title: 'Project Details'
    });
  });
};

const edit = (req, res) => {
  Project.findById(req.params.id).then((project) => {
    res.render('projects/edit', {
      project,
      title: 'Edit Project'
    });
  });
};

module.exports = {
  index,
  new: newProject,
  create,
  show,
  edit
}