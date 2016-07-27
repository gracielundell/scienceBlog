define('question-answer/helpers/question-popularity', ['exports', 'ember'], function (exports, _ember) {
  exports.questionPopularity = questionPopularity;

  function questionPopularity(params /*, hash*/) {
    var question = params[0];

    if (question.get('answers').get('length') >= 3) {
      return _ember['default'].String.htmlSafe('<i class="fa fa-star"></i>');
    }
  }

  exports['default'] = _ember['default'].Helper.helper(questionPopularity);
});