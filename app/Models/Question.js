'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Question extends Model {
  questionary() {
    return this.belongsTo('App/Models/Questionary');
  }

  options() {
    return this.hasMany('App/Models/Option');
  }
}

module.exports = Question;
