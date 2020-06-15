namespace quiz {
    export class FreeTextQuestion extends Question {
        public rightAnswer: string;

        constructor(_questionText: string, _answers: string[], _rightAnswer: string) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }

        public checkAnswer(): void {
            let answer: string = prompt(this.questionText + "\n\n" + "Please enter your answer:");
            if (answer == this.rightAnswer) {
                this.increaseScore();
                alert("Right Answer!");
            } else {
                alert("Wrong Answer!");
            }
            Quiz.start();
        }
    }
}