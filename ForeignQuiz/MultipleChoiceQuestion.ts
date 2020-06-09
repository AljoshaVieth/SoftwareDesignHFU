namespace quiz {

    export class MultipleChoiceQuestion extends Question {

        public answers: string[];
        public correctAnswers: number[];

        public checkAnswer(_selectedAnswer: number): boolean {
            //TODO
            return null;
        }

        public addAnswer(_newAnswer: string): string[] | boolean {
            //TODO
            return null;
        }

        public setCorrectAnswer(_correctAnswer: number): void {
            //TODO
        }
    }
}