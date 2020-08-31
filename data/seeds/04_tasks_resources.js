
exports.seed = async function(knex) {
  await knex("tasks_resources").insert([
    {tasks_id: 1, resources_id: 1 },
    {tasks_id: 1, resources_id: 4 },
    {tasks_id: 1, resources_id: 5 },
    {tasks_id: 2, resources_id: 4 },
    {tasks_id: 2, resources_id: 5 },
    {tasks_id: 3, resources_id: 1 },
    {tasks_id: 3, resources_id: 2 },
    {tasks_id: 3, resources_id: 3 },
    {tasks_id: 3, resources_id: 4 },
    {tasks_id: 3, resources_id: 5 },
    {tasks_id: 4, resources_id: 1 },
    {tasks_id: 4, resources_id: 4 },
    {tasks_id: 5, resources_id: 1 },
    {tasks_id: 5, resources_id: 2 },
    {tasks_id: 5, resources_id: 3 },
  ]);
};
