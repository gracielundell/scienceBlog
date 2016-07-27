define('question-answer/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // display questions and author names
      return this.store.findAll('question');
    },
    actions: {
      save3: function save3(params) {
        // save new question
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      },
      edit: function edit(question, params) {
        // edit question functionality, leave alone if not edited
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      }
    }
  });
});
// homepage