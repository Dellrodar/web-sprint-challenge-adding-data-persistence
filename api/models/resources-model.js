const db = require("../../data/config")

function getResources() {
  return db("resources");
}

function getResourcesById(id) {
  return db("resources")
  .where("id", id)
  .first()
}

function addResource(resource) {
  return db("resources")
  .insert(resource)
  .then((ids) => {
    return getResourcesById(ids[0]);
  })
}

function getProjectsByResource(r_id){
  return db("projects as p")
  .join("tasks as t", "t.projects_id", "p.id")
  .join("tasks_resources as tr", "tr.tasks_id", "t.id")
  .join("resources as r", "r.id", "tr.resources_id")
  .select("p.name", "r.name")
  .where("r.id", r_id)
  .orderBy("p.id");
}

module.exports = {
  getResources,
  getResourcesById,
  addResource,
  getProjectsByResource
}