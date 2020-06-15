"use strict";
var quiz;
(function (quiz) {
    class YesNoQuestion extends quiz.Question {
        constructor(_questionText, _rightAnswer) {
            super();
            this.rightAnswer = _rightAnswer;
            this.questionText = _questionText;
            this.answers = ["Yes", "No"];
        }
        checkAnswer() {
            let shuffledAnswers = this.shuffle(this.answers);
            let selectedAnswer = Number(prompt(this.questionText + "\n\n" + this.getAnswersAsString(shuffledAnswers)));
            let selectedAnswerBoolean;
            if (shuffledAnswers[selectedAnswer - 1] == "Yes") {
                selectedAnswerBoolean = true;
            }
            else {
                selectedAnswerBoolean = false;
            }
            if (this.rightAnswer == selectedAnswerBoolean) {
                this.increaseScore();
                alert("Right Answer!");
            }
            else {
                alert("Wrong Answer!");
            }
            quiz.Quiz.start();
        }
    }
    quiz.YesNoQuestion = YesNoQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=YesNoQuestion.js.map