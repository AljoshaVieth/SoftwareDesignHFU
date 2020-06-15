namespace quiz {
    export class MultipleChoiceQuestion extends Question {
        public numberOfRightAnswers: number;
        public rightAnswers: string[];

        constructor(_questionText: string, _answers: string[], _numberOfRightAnswers: number, _rightAnswers: string[]) {
            super();
            this.questionText = _questionText;
            this.answers = _answers;
            this.numberOfRightAnswers = _numberOfRightAnswers;
            this.rightAnswers = _rightAnswers;
        }

        public checkAnswer(): void {
            let shuffledAnswers: string[] = this.shuffle(this.answers);
            
            let selectedAnswersText: string = prompt(this.questionText + "\n\n" + "Please select your answers (seperated by comma)\n" + this.getAllAnswersAsString(shuffledAnswers));
            let selectedAnswers: number[] = selectedAnswersText.split(",").map(Number); // create an array of numbers
            if (selectedAnswers.length != this.numberOfRightAnswers ) {
                alert("You are Wrong!");
                Quiz.start();
                return;
            }

            let passed: boolean = true;
            for (let i: number = 0; i < selectedAnswers.length; i++) {
                if (!this.rightAnswers.includes(shuffledAnswers[selectedAnswers[i] - 1])) {
                    passed = false;
                    break;
                }
              }
            if (passed) {
                this.increaseScore();
                alert("Right Answer!");
              } else {
                alert("You are Wrong!");
              }
              
            Quiz.start();
        }

        private getAllAnswersAsString(_answers: string[]): string {
          let result: string = "Please select one option:\n";
          let index: number = 1;
          _answers.forEach(function(value: string): void {
            result = result + "[" + index + "] " + value + "\n";
            index++;
          });
          return result;
        }
        
    }
}