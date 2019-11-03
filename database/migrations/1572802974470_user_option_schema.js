'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserOptionSchema extends Schema {
  up() {
    this.create('user_options', table => {
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
        .integer('option_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('options')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('user_options');
  }
}

module.exports = UserOptionSchema;
