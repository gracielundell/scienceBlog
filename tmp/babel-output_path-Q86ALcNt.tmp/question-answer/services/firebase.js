define('question-answer/services/firebase', ['exports', 'emberfire/services/firebase', 'question-answer/config/environment'], function (exports, _emberfireServicesFirebase, _questionAnswerConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _questionAnswerConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});