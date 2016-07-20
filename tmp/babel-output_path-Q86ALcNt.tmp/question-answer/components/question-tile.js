define('question-answer/components/question-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      edit: function edit(question, params) {
        this.sendAction('edit', question, params);
        //send to index.js to edit posted q's
      }
    }
  });
});
// info gotten from update-question.js