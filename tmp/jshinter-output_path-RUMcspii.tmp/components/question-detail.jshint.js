QUnit.module('JSHint - components/question-detail.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/question-detail.js should pass jshint.\ncomponents/question-detail.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-detail.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
