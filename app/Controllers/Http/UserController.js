'use strict';

const User = use('App/Models/User');

class UserController {
  /**
   * Display a single user.
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ auth }) {
    const user = await User.findOrFail(auth.user.id);

    return user;
  }
}

module.exports = UserController;
