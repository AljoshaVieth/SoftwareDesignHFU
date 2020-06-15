"use strict";
var quiz;
(function (quiz) {
    class SingleChoiceQuestion extends quiz.Question {
        constructor(_questionText, _answers, _rightAnswer) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
        checkAnswer() {
            let shuffledAnswers = this.shuffle(this.answers);
            let selectedAnswer = Number(prompt(this.questionText + "\n\n" + this.getAnswersAsString(shuffledAnswers)));
            if (shuffledAnswers[selectedAnswer - 1] == this.rightAnswer) {
                this.increaseScore();
                alert("Right Answer!");
            }
            else {
                alert("Wrong Answer!");
            }
            quiz.Quiz.start();
        }
    }
    quiz.SingleChoiceQuestion = SingleChoiceQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=SingleChoiceQuestion.js.map