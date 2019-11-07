'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Psychologist extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
  pacients() {
    return this.hasMany('App/Models/Pacient');
  }
}

module.exports = Psychologist;
