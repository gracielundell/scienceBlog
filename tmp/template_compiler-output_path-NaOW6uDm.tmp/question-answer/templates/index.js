export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 4
          },
          "end": {
            "line": 12,
            "column": 4
          }
        },
        "moduleName": "question-answer/templates/index.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","question-tile",[],["question",["subexpr","@mut",[["get","question",["loc",[null,[11,29],[11,37]]]]],[],[]],"edit","edit"],["loc",[null,[11,4],[11,51]]]]
      ],
      locals: ["question"],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
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
          "line": 20,
          "column": 0
        }
      },
      "moduleName": "question-answer/templates/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" html that is displayed on the pg, using hbs to call new events/functionalities ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","homePage");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","header");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h2");
      var el4 = dom.createTextNode("Posted Queries");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-star");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" Popular\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","indexQuestions");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" list questions ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","newQuestion");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" add a new quetion ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]),3,3);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]),3,3);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model",["loc",[null,[10,12],[10,17]]]]],[],0,null,["loc",[null,[10,4],[12,13]]]],
      ["inline","new-question",[],["save2","save3","question",["subexpr","@mut",[["get","model",["loc",[null,[17,42],[17,47]]]]],[],[]]],["loc",[null,[17,4],[17,49]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));