const db = require("../../data/config");
const { orderBy } = require("../../data/config");

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

function getProjectResources(id){
  return db("projects as p")
  .join("tasks as t", "t.projects_id", "p.id")
  .join("tasks_resources as tr", "tr.tasks_id", "t.id")
  .join("resources as r", "r.id", "tr.resources_id")
  .select("p.id", "p.name", "r.name", "r.desc")
  .where("p.id", id)
  .groupBy("r.id");
}

function getProjectTasks(id){
  return db("projects as p")
  .join("tasks as t", "t.projects_id", "p.id")
  .select("p.name"," t.id", "t.desc", "t.notes", "t.completed")
  .where("p.id", id)
  .orderBy("t.id");
}

module.exports = {
  getProjects,
  getProjectsById,
  addProject,
  getProjectResources,
  getProjectTasks
}