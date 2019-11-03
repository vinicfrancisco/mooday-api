'use strict';

const Option = use('App/Models/Option');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with options
 */
class OptionController {
  /**
   * Show a list of all options.
   * GET options
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request }) {
    let options = [];
    const { question_id } = request.get();

    if (question_id === undefined) {
      options = Option.all();
    } else {
      options = Option.query()
        .where({ question_id })
        .fetch();
    }

    return options;
  }

  /**
   * Create/save a new option.
   * POST options
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only(['title', 'question_id', 'score']);

    const option = await Option.create(data);

    return option;
  }

  /**
   * Display a single option.
   * GET options/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const option = await Option.findOrFail(params.id);

    return option;
  }

  /**
   * Update option details.
   * PUT or PATCH options/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async update({ params, request }) {
    const option = await Option.findOrFail(params.id);
    const data = request.only(['title', 'question_id', 'score']);

    option.merge(data);
    option.save();

    return option;
  }

  /**
   * Delete a option with id.
   * DELETE options/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const option = await Option.findOrFail(params.id);

    option.delete();
  }
}

module.exports = OptionController;
