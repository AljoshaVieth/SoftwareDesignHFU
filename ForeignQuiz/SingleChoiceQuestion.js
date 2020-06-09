"use strict";
var quiz;
(function (quiz) {
    class SingleChoiceQuestion extends quiz.Question {
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
    quiz.SingleChoiceQuestion = SingleChoiceQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=SingleChoiceQuestion.js.map