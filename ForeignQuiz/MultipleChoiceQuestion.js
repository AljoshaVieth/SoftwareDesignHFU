"use strict";
var quiz;
(function (quiz) {
    class MultipleChoiceQuestion extends quiz.Question {
        checkAnswer(_selectedAnswer) {
            //TODO
            return null;
        }
        addAnswer(_newAnswer) {
            //TODO
            return null;
        }
        setCorrectAnswer(_correctAnswer) {
            //TODO
        }
    }
    quiz.MultipleChoiceQuestion = MultipleChoiceQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=MultipleChoiceQuestion.js.map