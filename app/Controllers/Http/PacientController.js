"use strict";

const Pacient = use("App/Models/Pacient");
const Psychologist = use("App/Models/Psychologist");

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
    const psychologist = await Psychologist.query().where(
      "user_id",
      auth.user.id
    );

    const pacients = await Pacient.query().where(
      "psychologist_id",
      psychologist.id
    );

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
  async store({ request, response }) {}

  /**
   * Display a single pacient.
   * GET pacients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Delete a pacient with id.
   * DELETE pacients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PacientController;
