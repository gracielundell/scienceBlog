export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 2,
            "column": 4
          },
          "end": {
            "line": 4,
            "column": 4
          }
        },
        "moduleName": "question-answer/templates/components/admin-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" asks \"");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\"\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["content","question.author",["loc",[null,[3,6],[3,25]]]],
        ["content","question.title",["loc",[null,[3,32],[3,50]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": false,
      "revision": "Ember@2.4.3",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 0
        }
      },
      "moduleName": "question-answer/templates/components/admin-tile.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("li");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(element0,1,1);
      morphs[1] = dom.createMorphAt(element0,3,3);
      return morphs;
    },
    statements: [
      ["block","link-to",["question",["get","question.id",["loc",[null,[2,26],[2,37]]]]],[],0,null,["loc",[null,[2,4],[4,16]]]],
      ["inline","update-question",[],["question",["subexpr","@mut",[["get","question",["loc",[null,[5,31],[5,39]]]]],[],[]],"edit","edit"],["loc",[null,[5,4],[5,53]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));