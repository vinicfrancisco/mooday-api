'use strict';

const User = use('App/Models/User');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async show({ auth }) {
    const user = await User.findOrFail(auth.user.id);

    return user;
  }
}

module.exports = UserController;
