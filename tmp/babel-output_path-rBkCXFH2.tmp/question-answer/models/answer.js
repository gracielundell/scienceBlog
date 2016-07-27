define('question-answer/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].attr(),
    answer: _emberData['default'].attr(),
    question: _emberData['default'].belongsTo('question', { async: true })
  });
});