module.exports = ({ knex }) => ({
  name: 'create_user_table',

  async up() {
    if (await knex.schema.hasTable('user')) return;
    return knex.schema.createTable('user', table => {
      table.increments('id').primary();
      table.timestamps(true, true);
    });
  },

  async down() {
    if (await knex.schema.hasTable('user')) {
      return knex.schema.dropTable('user');
    }
  },
});
