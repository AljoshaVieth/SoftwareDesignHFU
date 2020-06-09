"use strict";
var quiz;
(function (quiz) {
    class YesNoQuestion extends quiz.Question {
        checkAnswer(_selectedAnswer) {
            //TODO
            return null;
        }
        setCorrectAnswer(_correctAnswer) {
            //TODO
        }
    }
    quiz.YesNoQuestion = YesNoQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=YesNoQuestion.js.map