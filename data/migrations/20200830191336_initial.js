
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id")
    table.text("name").notNull()
    table.text("desc")
    table.boolean("completed").notNull().defaultTo(false)
  })
  await knex.schema.createTable("resources", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
    table.text("desc")
  })
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id")
    table.text("desc").notNull()
    table.text("notes")
    table.boolean("completed").notNull().defaultTo(false)
    table.integer("projects_id")
    .notNull()
    .references("id")
    .inTable("projects")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  })
  await knex.schema.createTable("tasks_resources", (table) => {
    table.integer("tasks_id")
    .notNull()
    .references("id")
    .inTable("tasks")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
    table.integer("resources_id")
    .notNull()
    .references("id")
    .inTable("resources")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
    table.primary(["tasks_id", "resources_id"]);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tasks_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
