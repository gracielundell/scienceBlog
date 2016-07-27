define('question-answer/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    author: _emberData['default'].attr(),
    notes: _emberData['default'].attr(),
    answers: _emberData['default'].hasMany('answer', { async: true })
  });
});