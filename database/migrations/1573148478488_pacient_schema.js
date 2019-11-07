'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PacientSchema extends Schema {
  up() {
    this.create('pacients', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('psychologist_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('psychologists')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('pacients');
  }
}

module.exports = PacientSchema;
