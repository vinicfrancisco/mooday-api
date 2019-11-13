"use strict";

const User = use("App/Models/User");
const Psychologist = use("App/Models/Psychologist");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with psychologists
 */
class PsychologistController {
  /**
   * Create/save a new psychologist.
   * POST psychologists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth }) {
    const user = await User.findOrFail(auth.user.id);

    const psychologist = await Psychologist.create({ user_id: user.id });

    return psychologist;
  }

  /**
   * Delete a psychologist with id.
   * DELETE psychologists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const psychologist = await Psychologist.findOrFail(params.id);

    await psychologist.delete();
  }
}

module.exports = PsychologistController;
