express= require('express');

const projects = require("../models/projects-model");
const { addProject } = require('../models/projects-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allProjects = await projects.getProjects()
    return res.json(allProjects)
  } catch (err) {
    return next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const project = await projects.getProjectsById(req.params.id)
    return res.json(project)
  } catch (err) {
    return next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await addProject(req.body)
    return res.json(project);
  }catch(err){
    return next(err)
  }
})


module.exports = router;