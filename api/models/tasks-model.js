const db = require("../../data/config")

function getTasks() {
  return db("tasks as t")
  .join("projects as p", "p.id", "t.projects_id")
  .select("t.*", "p.name", "p.desc as projectDescription")
}

function getTasksById(id) {
  return db("tasks")
  .where("id", id)
  .first()
}

function addTask(task) {
  return db("tasks")
  .insert(task)
  .then((ids) => {
    return getTasksById(ids[0]);
  })
}

module.exports = {
  getTasks,
  getTasksById,
  addTask
}