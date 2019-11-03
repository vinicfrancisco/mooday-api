'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class OptionSchema extends Schema {
  up() {
    this.create('options', table => {
      table.increments();
      table
        .integer('question_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('questions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('title', 250);
      table.integer('score');
      table.timestamps();
    });
  }

  down() {
    this.drop('options');
  }
}

module.exports = OptionSchema;
