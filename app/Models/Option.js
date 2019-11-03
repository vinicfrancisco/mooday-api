'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Option extends Model {
  question() {
    return this.belongsTo('App/Models/Question');
  }

  user() {
    return this.belongsToMany('App/Models/User').withTimestamps();
  }
}

module.exports = Option;
