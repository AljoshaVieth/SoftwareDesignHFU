namespace quiz {
    export class YesNoQuestion extends Question {
        public rightAnswer: boolean;

        constructor(_questionText: string, _rightAnswer: boolean) {
            super();
            this.rightAnswer = _rightAnswer;
            this.questionText = _questionText; 
            this.answers = ["Yes", "No"];           
        }

        checkAnswer(): void {
            let shuffledAnswers: string[] = this.shuffle(this.answers);
            let selectedAnswer: number = Number(prompt(this.questionText + "\n\n" + this.getAnswersAsString(shuffledAnswers)));
            let selectedAnswerBoolean: boolean;
            if (shuffledAnswers[selectedAnswer - 1] == "Yes") {
                selectedAnswerBoolean = true;
            } else {
                selectedAnswerBoolean = false;
            }
            if (this.rightAnswer == selectedAnswerBoolean) {
                this.increaseScore();
                alert("Right Answer!");
            } else {
                alert("Wrong Answer!");
            }
            Quiz.start();
        }
    }
}