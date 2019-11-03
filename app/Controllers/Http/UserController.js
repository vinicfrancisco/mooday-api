'use strict';

const User = use('App/Models/User');

class UserController {
  async index({ request }) {
    const { page, per } = request.get();

    const users = await User.query().paginate(!!page ? page : 1, !!per ? per : 25);

    return users;
  }

  async show({ auth }) {
    const user = await User.findOrFail(auth.user.id);

    return user;
  }
}

module.exports = UserController;
