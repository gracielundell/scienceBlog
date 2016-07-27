export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes"
          ]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "question-answer/templates/components/new-answer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("If You think you have The Answer");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","user");
        var el3 = dom.createTextNode("Answer By");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","answer");
        var el3 = dom.createTextNode("Answer");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createTextNode("Save Answer");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [3]);
        var element2 = dom.childAt(element1, [13]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element1,4,4);
        morphs[1] = dom.createMorphAt(element1,10,10);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [
        ["inline","input",[],["value",["subexpr","@mut",[["get","user",["loc",[null,[5,18],[5,22]]]]],[],[]],"id","user"],["loc",[null,[5,4],[5,34]]]],
        ["inline","textarea",[],["value",["subexpr","@mut",[["get","answer",["loc",[null,[7,21],[7,27]]]]],[],[]],"id","answer"],["loc",[null,[7,4],[7,41]]]],
        ["element","action",["saveAnswer1",["get","question",["loc",[null,[8,35],[8,43]]]]],[],["loc",[null,[8,12],[8,45]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "question-answer/templates/components/new-answer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Answer the Question");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["element","action",["answerFormShow"],[],["loc",[null,[11,10],[11,37]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.3",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 13,
          "column": 0
        }
      },
      "moduleName": "question-answer/templates/components/new-answer.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","liquid-if",[["get","addNewAnswer",["loc",[null,[1,13],[1,25]]]]],[],0,1,["loc",[null,[1,0],[12,14]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));