define("question-answer/transitions/to-right", ["exports", "question-answer/transitions/move-over"], function (exports, _questionAnswerTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _questionAnswerTransitionsMoveOver["default"].call(this, 'x', 1, opts);
  };
});