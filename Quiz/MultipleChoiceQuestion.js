"use strict";
var quiz;
(function (quiz) {
    class MultipleChoiceQuestion extends quiz.Question {
        constructor(_questionText, _answers, _numberOfRightAnswers, _rightAnswers) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.numberOfRightAnswers = _numberOfRightAnswers;
            this.rightAnswers = _rightAnswers;
        }
        checkAnswer() {
            let shuffledAnswers = this.shuffle(this.answers);
            let selectedAnswersText = prompt(this.questionText + "\n\n" + "Please select your answers (seperated by comma)\n" + this.getAllAnswersAsString(shuffledAnswers));
            let selectedAnswers = selectedAnswersText.split(",").map(Number); // create an array of numbers
            if (selectedAnswers.length != this.numberOfRightAnswers) {
                alert("You are Wrong!");
                quiz.Quiz.start();
                return;
            }
            let passed = true;
            for (let i = 0; i < selectedAnswers.length; i++) {
                if (!this.rightAnswers.includes(shuffledAnswers[selectedAnswers[i] - 1])) {
                    passed = false;
                    break;
                }
            }
            if (passed) {
                this.increaseScore();
                alert("Right Answer!");
            }
            else {
                alert("You are Wrong!");
            }
            quiz.Quiz.start();
        }
        getAllAnswersAsString(_answers) {
            let result = "Please select one option:\n";
            let index = 1;
            _answers.forEach(function (value) {
                result = result + "[" + index + "] " + value + "\n";
                index++;
            });
            return result;
        }
    }
    quiz.MultipleChoiceQuestion = MultipleChoiceQuestion;
})(quiz || (quiz = {}));
//# sourceMappingURL=MultipleChoiceQuestion.js.map