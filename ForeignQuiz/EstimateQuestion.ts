namespace quiz {

    export class EstimateQuestion extends Question {

        public answer: number;
        public tolerance: number;

        public checkAnswer(_estimatedAnswer: number): boolean {
            //TODO
            return null;
        }

        public setCorrectAnswer(_correctAnswer: number): void {
            //TODO
        }

        public setTolerance(_tolerance: number): void {
            //TODO
        }
    }
}