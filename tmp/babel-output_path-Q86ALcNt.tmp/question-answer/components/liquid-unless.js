define('question-answer/components/liquid-unless', ['exports', 'question-answer/components/liquid-if'], function (exports, _questionAnswerComponentsLiquidIf) {
  exports['default'] = _questionAnswerComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});