define('question-answer/tests/components/answer-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/answer-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/answer-tile.js should pass jshint.\ncomponents/answer-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/answer-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});