"use strict";
var quiz;
(function (quiz) {
    class TextQuestion extends quiz.Question {
        checkAnswer(_inputAnswer) {
            //TODO
            return null;
        }
        setCorrectAnswer(_correctAnswer) {
            //TODO
        }
    }
    quiz.TextQuestion = TextQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=TextQuestion.js.map