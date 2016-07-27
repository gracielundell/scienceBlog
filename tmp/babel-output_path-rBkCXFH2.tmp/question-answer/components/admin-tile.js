define('question-answer/components/admin-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    // will hold edit function for posted questions
    actions: {
      edit: function edit(question, params) {
        this.sendAction('edit', question, params);
        //send to index.js to edit posted q's
      }
    }
  });
});