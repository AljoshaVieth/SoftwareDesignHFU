namespace quiz {
    export class SingleChoiceQuestion extends Question {

        public rightAnswer: string;
        constructor(_questionText: string, _answers: string[], _rightAnswer: string) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }

        public checkAnswer(): void {
            let shuffledAnswers: string[] = this.shuffle(this.answers);
            let selectedAnswer: number = Number(prompt(this.questionText + "\n\n" + this.getAnswersAsString(shuffledAnswers)));
            if (shuffledAnswers[selectedAnswer - 1] == this.rightAnswer) {
                this.increaseScore();
                alert("Right Answer!");
            } else {
                alert("Wrong Answer!");
            }
            Quiz.start();
        }
    }
}