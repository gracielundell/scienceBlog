define("question-answer/transitions/to-down", ["exports", "question-answer/transitions/move-over"], function (exports, _questionAnswerTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _questionAnswerTransitionsMoveOver["default"].call(this, 'y', 1, opts);
  };
});