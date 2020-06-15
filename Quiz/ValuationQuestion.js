"use strict";
var quiz;
(function (quiz) {
    class ValuationQuestion extends quiz.Question {
        constructor(_questionText, _rightAnswer, _tolerance) {
            super();
            this.questionText = _questionText;
            this.rightAnswer = _rightAnswer;
            this.tolerance = _tolerance;
        }
        checkAnswer() {
            // TODO maybe check if it´s a valid number...
            let answeredNumber = Number(prompt(this.questionText + "\n\n" + "Please enter a valid number as answer:"));
            if (answeredNumber < (this.rightAnswer + this.tolerance) && answeredNumber > (this.rightAnswer - this.tolerance)) {
                this.increaseScore();
                alert("You are right!\nThe exact value is: " + this.rightAnswer);
            }
            else {
                alert("You are wrong!");
            }
            quiz.Quiz.start();
        }
    }
    quiz.ValuationQuestion = ValuationQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=ValuationQuestion.js.map