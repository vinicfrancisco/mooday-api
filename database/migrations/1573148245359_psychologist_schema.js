'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PsychologistSchema extends Schema {
  up () {
    this.create('psychologists', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('psychologists')
  }
}

module.exports = PsychologistSchema
