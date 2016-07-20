define('question-answer/components/new-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewQuestion: false,
    actions: {
      questionFormShow: function questionFormShow() {
        this.set('addNewQuestion', true);
      },
      save1: function save1() {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set('addNewQuestion', false);
        // save2 just a middleman btwn save1 and save3, doesnt really ever exist
        this.set('title', "");
        this.set('author', "");
        this.set('notes', "");
        this.sendAction('save2', params);
      }
    }
  });
});