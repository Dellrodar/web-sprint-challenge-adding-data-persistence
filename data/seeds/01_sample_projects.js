
exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "DB Sprint", desc: "Lambda's Unit 4 DB Sprint!", completed: true},
    { name: "Seeds", desc: "Making more seeds!", completed: false }
  ])
};
