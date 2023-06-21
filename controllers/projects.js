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

const update = async (req, res) => {
  try {
    req.params.firstAppear = req.params.firstAppear.toLocaleDateString('en-US')
    await Project.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.redirect(`/projects/${req.params.id}`);
  } catch (err) {
    res.render(`/projects/${req.params.id}/edit`, {
      errorMsg: err.message,
      title: 'Edit Project'
    });
  };
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.redirect('/projects');
  } catch (err) {
    res.render('/projects', {
      errorMsg: err.message,
      title: 'Projects'
    });
  };
};

module.exports = {
  index,
  new: newProject,
  create,
  show,
  edit,
  update,
  delete: deleteProject
};