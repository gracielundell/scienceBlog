define('question-answer/components/new-answer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewAnswer: false,
    actions: {
      answerFormShow: function answerFormShow() {
        this.set('addNewAnswer', true);
      },
      saveAnswer1: function saveAnswer1(question) {
        var params = {
          question: question,
          user: this.get('user'),
          answer: this.get('answer')

        };
        this.set('addNewAnswer', false);
        this.set('user', ""), this.set('answer', ""), this.sendAction('saveAnswer2', params);
      }
    }
  });
});