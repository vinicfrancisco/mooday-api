"use strict";

const Answer = use("App/Models/Answer");
const Database = use("Database");

class AnswerController {
  async store({ request, auth }) {
    const data = request.only(["questionary_id", "answers"]);
    let list = [];

    data.answers.forEach(answer => {
      list.push({ ...answer, user_id: auth.user.id });
    });

    const answers = await Answer.createMany(list);

    return answers;
  }
}

module.exports = AnswerController;
