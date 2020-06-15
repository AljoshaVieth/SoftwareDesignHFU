"use strict";
var quiz;
(function (quiz) {
    class Question {
        /**
         * Shuffles an array using the Fisher-Yates algorithm
         * https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
         * https://github.com/Daplie/knuth-shuffle
         * https://stackoverflow.com/a/2450976/6381430
         * @param _array the array to shuffle
         */
        shuffle(_array) {
            let currentIndex = _array.length;
            let temporaryValue, randomIndex;
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
        increaseScore() {
            quiz.Quiz.score = quiz.Quiz.score + 1;
        }
        /**
         * Returns a string with all available answers numbered
         */
        getAnswersAsString(answers) {
            let result = "Please select one option:\n";
            let index = 1;
            answers.forEach(function (value) {
                result = result + "[" + index + "] " + value + "\n";
                index++;
            });
            return result;
        }
    }
    quiz.Question = Question;
})(quiz || (quiz = {}));
//# sourceMappingURL=Question.js.map