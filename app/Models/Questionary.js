"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Questionary extends Model {
  user() {
    return this.belongsTo("App/Models/Questions");
  }

  questions() {
    return this.hasMany("App/Models/Question");
  }
}

module.exports = Questionary;
