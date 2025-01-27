exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('cases', function (table) {
      table.string('case_id').notNullable().primary();
      table
        .string('user_id')
        .references('id')
        .inTable('profiles')
        .onDelete('RESTRICT');
      table.string('case_url');
      table.string('case_number');
      table.string('date');
      table.string('judge');
      table.string('case_outcome');
      table.string('country_of_origin');
      table.string('protected_grounds');
      table.string('application_type');
      table.string('case_origin_city');
      table.string('case_origin_state');
      table.string('gender');
      table.string('applicant_language');
      table.string('indigenous_group');
      table.string('type_of_violence');
      table.boolean('appellate');
      table.boolean('filed_in_one_year');
      table.boolean('credible');
      table.string('status');
      table.string('uploaded');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('cases');
};
