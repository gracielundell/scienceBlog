define('question-answer/components/update-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    editQuestionForm: false,
    actions: {
      editQuestionForm: function editQuestionForm() {
        this.set('editQuestionForm', true);
      },
      edit: function edit(question) {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set('editQuestionForm', false);
        this.sendAction('edit', question, params);
      }
    }
  });
});