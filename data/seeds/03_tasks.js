
exports.seed = async function(knex) {
  await knex("tasks").insert([
   {desc: "Learn the basic of relational DBs", notes: "more learning is required to use them all!", completed: true, projects_id: 1},
   {desc: "Pay attention in class", notes: "always take notes", completed: true, projects_id: 1},
   {desc: "Keep working hard!", notes: "this never stops", completed: true, projects_id: 1},
   {desc: "Keep making new seeds", notes: "harder than it looks", completed: false, projects_id: 2},
   {desc: "This is the last task!", notes: "It's the final countdown...", completed: false, projects_id: 2},
      ]);
};
