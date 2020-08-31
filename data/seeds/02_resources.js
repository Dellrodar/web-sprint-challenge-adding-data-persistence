
exports.seed = async function(knex) {
  await knex("resources").insert([
    {name: "Computer", desc: "A computer to run a program"},
    {name: "Whiteboard", desc: "Keeps keep track of your thoughts"},
    {name: "Dry Erase Marker", desc: "writes on the whiteboard"},
    {name: "Time", desc: "Always a luxury"},
    {name: "Energy", desc: "Passion to create"},
  ]);
};
