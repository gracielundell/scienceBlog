import Ember from 'ember';

export default Ember.Component.extend({
  // will hold edit function for posted questions
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
      //send to index.js to edit posted q's
    },
  }
});
