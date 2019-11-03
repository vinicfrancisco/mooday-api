'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionarySchema extends Schema {
  up() {
    this.create('questionaries', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('description', 400);
      table.string('title', 50);
      table.timestamps();
    });
  }

  down() {
    this.drop('questionaries');
  }
}

module.exports = QuestionarySchema;
