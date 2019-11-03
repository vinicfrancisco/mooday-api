'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionSchema extends Schema {
  up() {
    this.create('questions', table => {
      table.increments();
      table
        .integer('questionary_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('questionaries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('title', 250);
      table.timestamps();
    });
  }

  down() {
    this.drop('questions');
  }
}

module.exports = QuestionSchema;
