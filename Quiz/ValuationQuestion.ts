namespace quiz {
    export class ValuationQuestion extends Question {
        public rightAnswer: number;
        public tolerance: number;

        constructor(_questionText: string, _rightAnswer: number, _tolerance: number) {
            super();
            this.questionText = _questionText;
            this.rightAnswer = _rightAnswer;
            this.tolerance = _tolerance;
        }

        public checkAnswer(): void {
            // TODO maybe check if it´s a valid number...
            let answeredNumber: number = Number(prompt(this.questionText + "\n\n" + "Please enter a valid number as answer:"));
            if (answeredNumber < (this.rightAnswer + this.tolerance) && answeredNumber > (this.rightAnswer - this.tolerance)) {
                this.increaseScore();
                alert("You are right!\nThe exact value is: " + this.rightAnswer);
            } else {
                alert("You are wrong!");
            }

            Quiz.start();
        }
    }
}