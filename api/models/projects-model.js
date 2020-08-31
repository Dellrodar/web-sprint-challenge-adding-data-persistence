const db = require("../../data/config")

function getProjects() {
  return db("projects");
}

function getProjectsById(id) {
  return db("projects")
  .where("id", id)
  .first()
}

function addProject(project) {
  return db("projects")
  .insert(project)
  .then((ids) => {
    return getProjectsById(ids[0]);
  })
}

module.exports = {
  getProjects,
  getProjectsById,
  addProject
}