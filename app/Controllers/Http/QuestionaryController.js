'use strict';

const Questionary = use('App/Models/Questionary');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with questionaries
 */
class QuestionaryController {
  /**
   * Show a list of all questionaries.
   * GET questionaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const questionaries = await Questionary.query()
      .with('questions')
      .fetch();

    return questionaries;
  }

  /**
   * Create/save a new questionary.
   * POST questionaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only(['name', 'observation']);

    const questionary = await Questionary.create({ user_id: auth.user.id, ...data });

    return questionary;
  }

  /**
   * Display a single questionary.
   * GET questionaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const questionary = await Questionary.findOrFail(params.id);
    const questionaryQuestions = await questionary.questions().fetch();

    return questionaryQuestions;
  }

  /**
   * Update questionary details.
   * PUT or PATCH questionaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const questionary = await Questionary.findOrFail(params.id);
    const data = request.only(['name', 'observation']);

    questionary.merge(data);
    questionary.save();

    return questionary;
  }

  /**
   * Delete a questionary with id.
   * DELETE questionaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response, auth }) {
    const questionary = await Questionary.findOrFail(params.id);

    if (questionary.user_id !== auth.user.id) {
      return response.status(401);
    }

    await questionary.delete();
  }
}

module.exports = QuestionaryController;
