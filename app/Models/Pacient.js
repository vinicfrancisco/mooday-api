'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Pacient extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
  psychologist() {
    return this.belongsTo('App/Models/Psychologist');
  }
}

module.exports = Pacient;
