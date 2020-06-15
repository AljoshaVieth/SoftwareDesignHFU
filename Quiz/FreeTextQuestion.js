"use strict";
var quiz;
(function (quiz) {
    class FreeTextQuestion extends quiz.Question {
        constructor(_questionText, _answers, _rightAnswer) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
        checkAnswer() {
            let answer = prompt(this.questionText + "\n\n" + "Please enter your answer:");
            if (answer == this.rightAnswer) {
                this.increaseScore();
                alert("Right Answer!");
            }
            else {
                alert("Wrong Answer!");
            }
            quiz.Quiz.start();
        }
    }
    quiz.FreeTextQuestion = FreeTextQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=FreeTextQuestion.js.map