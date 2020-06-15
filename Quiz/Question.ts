namespace quiz {
    export class Question {
        public questionText: string;
        public answers: string[];

        /**
         * Shuffles an array using the Fisher-Yates algorithm
         * https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
         * https://github.com/Daplie/knuth-shuffle
         * https://stackoverflow.com/a/2450976/6381430
         * @param _array the array to shuffle
         */
        public shuffle(_array: string[]): string[] {
          let currentIndex: number = _array.length;
          let temporaryValue: string, randomIndex: number;
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = _array[currentIndex];
            _array[currentIndex] = _array[randomIndex];
            _array[randomIndex] = temporaryValue;
          }
          return _array;
        }

        /**
         * Increases the score stored in the quiz class
         */
        public increaseScore(): void {
          Quiz.score = Quiz.score + 1;
        }
        
        /**
         * Returns a string with all available answers numbered
         */
        public getAnswersAsString(answers: string[]): string {
          let result: string = "Please select one option:\n";
          let index: number = 1;
          answers.forEach(function(value: string): void {
            result = result + "[" + index + "] " + value + "\n";
            index++;
          });
          return result;
        }
    }
}