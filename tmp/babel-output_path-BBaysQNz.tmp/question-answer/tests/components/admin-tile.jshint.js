define('question-answer/tests/components/admin-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/admin-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/admin-tile.js should pass jshint.\ncomponents/admin-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/admin-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/admin-tile.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});