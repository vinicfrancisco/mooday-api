"use strict";

const Pacient = use("App/Models/Pacient");
const Psychologist = use("App/Models/Psychologist");
const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pacients
 */
class PacientController {
  /**
   * Show a list of all pacients.
   * GET pacients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ auth }) {
    const psychologist = await Psychologist.findBy("user_id", auth.user.id);

    const pacients = await Pacient.query()
      .where("psychologist_id", psychologist.id)
      .fetch();

    return pacients;
  }

  /**
   * Create/save a new pacient.
   * POST pacients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only("email");

    const user = await User.findBy("email", data.email);
    const psychologist = await Psychologist.findBy("user_id", auth.user.id);

    const pacient = await Pacient.create({
      user_id: user.id,
      psychologist_id: psychologist.id
    });

    return pacient;
  }

  /**
   * Display a single pacient.
   * GET pacients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const pacient = await Pacient.findOrFail(params.id);

    return pacient;
  }

  /**
   * Delete a pacient with id.
   * DELETE pacients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response, auth }) {
    const pacient = await Pacient.findOrFail(params.id);
    const psychologist = await Psychologist.findBy("user_id", auth.user.id);

    if (pacient.psychologist_id !== psychologist.id) {
      return response.status(401);
    }

    await pacient.delete();
  }
}

module.exports = PacientController;
