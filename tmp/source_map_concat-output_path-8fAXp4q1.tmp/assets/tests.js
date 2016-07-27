define('question-answer/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nadapters/application.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nadapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('question-answer/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('question-answer/tests/components/admin-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/admin-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/admin-tile.js should pass jshint.\ncomponents/admin-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/admin-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/admin-tile.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('question-answer/tests/components/answer-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/answer-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/answer-tile.js should pass jshint.\ncomponents/answer-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/answer-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('question-answer/tests/components/new-answer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/new-answer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-answer.js should pass jshint.\ncomponents/new-answer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-answer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-answer.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-answer.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-answer.js: line 19, col 44, Expected an assignment or function call and instead saw an expression.\n\n5 errors');
  });
});
define('question-answer/tests/components/new-question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/new-question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-question.js should pass jshint.\ncomponents/new-question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-question.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-question.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
define('question-answer/tests/components/question-detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/question-detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/question-detail.js should pass jshint.\ncomponents/question-detail.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-detail.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('question-answer/tests/components/question-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/question-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/question-tile.js should pass jshint.\ncomponents/question-tile.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-tile.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/question-tile.js: line 7, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('question-answer/tests/components/update-question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/update-question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/update-question.js should pass jshint.\ncomponents/update-question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/update-question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/update-question.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/update-question.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
define('question-answer/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;

  /**
   * Creates an offline Firebase reference with optional initial data and url.
   *
   * Be sure to `stubFirebase()` and `unstubFirebase()` in your tests!
   *
   * @param  {Object} [initialData]
   * @param  {String} [url]
   * @return {Firebase}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests.firebaseio.com' : arguments[1];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var ref = new _firebase['default'](url);
    _firebase['default'].goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('question-answer/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('question-answer/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('question-answer/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'question-answer/tests/helpers/start-app', 'question-answer/tests/helpers/destroy-app'], function (exports, _qunit, _questionAnswerTestsHelpersStartApp, _questionAnswerTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _questionAnswerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _questionAnswerTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('question-answer/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('question-answer/tests/helpers/question-popularity.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/question-popularity.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/question-popularity.js should pass jshint.\nhelpers/question-popularity.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/question-popularity.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/question-popularity.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('question-answer/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {Ember.Application} app
   * @param  {Firebase} ref
   * @param  {String} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    var store = app.__container__.lookup('service:store');
    var adapter = store.adapterFor(model);

    adapter._ref = ref;
    adapter._queueFlushDelay = false;
  }
});
define('question-answer/tests/helpers/resolver', ['exports', 'question-answer/resolver', 'question-answer/config/environment'], function (exports, _questionAnswerResolver, _questionAnswerConfigEnvironment) {

  var resolver = _questionAnswerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _questionAnswerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _questionAnswerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('question-answer/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('question-answer/tests/helpers/start-app', ['exports', 'ember', 'question-answer/app', 'question-answer/config/environment'], function (exports, _ember, _questionAnswerApp, _questionAnswerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _questionAnswerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _questionAnswerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('question-answer/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('question-answer/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {

    // check for existing stubbing
    if (!_firebase['default']._unStub) {

      var originalSet = _firebase['default'].prototype.set;
      var originalUpdate = _firebase['default'].prototype.update;
      var originalRemove = _firebase['default'].prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].prototype.set = originalSet;
        _firebase['default'].prototype.update = originalUpdate;
        _firebase['default'].prototype.remove = originalRemove;
      };

      _firebase['default'].prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('question-answer/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('question-answer/tests/integration/components/admin-tile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('admin-tile', 'Integration | Component | admin tile', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'admin-tile', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'admin-tile', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/admin-tile-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/admin-tile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/admin-tile-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/answer-tile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('answer-tile', 'Integration | Component | answer tile', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'answer-tile', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'answer-tile', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/answer-tile-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/answer-tile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/answer-tile-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/new-answer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('new-answer', 'Integration | Component | new answer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'new-answer', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'new-answer', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/new-answer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/new-answer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-answer-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/new-question-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('new-question', 'Integration | Component | new question', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'new-question', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'new-question', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/new-question-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/new-question-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-question-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/question-detail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('question-detail', 'Integration | Component | question detail', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'question-detail', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'question-detail', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/question-detail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/question-detail-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/question-detail-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/question-tile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('question-tile', 'Integration | Component | question tile', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'question-tile', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'question-tile', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/question-tile-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/question-tile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/question-tile-test.js should pass jshint.');
  });
});
define('question-answer/tests/integration/components/update-question-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('update-question', 'Integration | Component | update question', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'update-question', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'update-question', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('question-answer/tests/integration/components/update-question-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/update-question-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/update-question-test.js should pass jshint.');
  });
});
define('question-answer/tests/models/answer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/answer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/answer.js should pass jshint.\nmodels/answer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/answer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('question-answer/tests/models/question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/question.js should pass jshint.\nmodels/question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('question-answer/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('question-answer/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('question-answer/tests/routes/admin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin.js should pass jshint.\nroutes/admin.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('question-answer/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 6, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 11, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 17, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('question-answer/tests/routes/question.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/question.js should pass jshint.\nroutes/question.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/question.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/question.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/question.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
define('question-answer/tests/test-helper', ['exports', 'question-answer/tests/helpers/resolver', 'ember-qunit'], function (exports, _questionAnswerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_questionAnswerTestsHelpersResolver['default']);
});
define('question-answer/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('question-answer/tests/unit/helpers/question-popularity-test', ['exports', 'question-answer/helpers/question-popularity', 'qunit'], function (exports, _questionAnswerHelpersQuestionPopularity, _qunit) {

  (0, _qunit.module)('Unit | Helper | question popularity');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _questionAnswerHelpersQuestionPopularity.questionPopularity)([42]);
    assert.ok(result);
  });
});
define('question-answer/tests/unit/helpers/question-popularity-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers/question-popularity-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/question-popularity-test.js should pass jshint.');
  });
});
define('question-answer/tests/unit/models/answer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('answer', 'Unit | Model | answer', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('question-answer/tests/unit/models/answer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/answer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/answer-test.js should pass jshint.');
  });
});
define('question-answer/tests/unit/models/question-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('question', 'Unit | Model | question', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('question-answer/tests/unit/models/question-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/question-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/question-test.js should pass jshint.');
  });
});
define('question-answer/tests/unit/routes/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('question-answer/tests/unit/routes/admin-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/admin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass jshint.');
  });
});
define('question-answer/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('question-answer/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('question-answer/tests/unit/routes/question-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:question', 'Unit | Route | question', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('question-answer/tests/unit/routes/question-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/question-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('question-answer/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map