"use strict";
var quiz;
(function (quiz) {
    class Quiz {
        static start() {
            Quiz.printMainMenu();
        }
        static printMainMenu() {
            let userSelection = prompt("Welcome, your current score is: " + Quiz.score + "\n" + "Please select one option:\n" +
                "[1] Answer Question\n" + "[2] Add Question\n" + "[3] Exit");
            switch (userSelection) {
                case "1":
                    this.askRandomQuestion();
                    break;
                case "2":
                    this.addQuestion();
                    break;
                case "3":
                    alert("Bye");
                    break;
                default:
                    alert("oo");
                    this.printMainMenu();
                    break;
            }
        }
        static addQuestion() {
            let questionType = prompt("Please select the type of question you wish to add:\n"
                + "[1] YesNoQuestion\n[2] ValuationQuestion\n[3] SingleChoiceQuestion\n[4] MultipleChoiceQuestion\n[5] FreetextQuestion");
            switch (questionType) {
                case "1":
                    this.addYesNoQuestion();
                    break;
                case "2":
                    this.addValuationQuestion();
                    break;
                case "3":
                    this.addSingleChoiceQuestion();
                    break;
                case "4":
                    this.addMultipleChoiceQuestion();
                    break;
                case "5":
                    this.addFreeTextQuestion();
                    break;
                default:
                    this.addQuestion();
                    break;
            }
            Quiz.start();
        }
        static addYesNoQuestion() {
            let questionText = prompt("Please enter your question:");
            let rightAnswerText = prompt("Please select the right answer: \n[1]Yes\n[2]No");
            let rightAnswer = false;
            switch (rightAnswerText) {
                case "1":
                    rightAnswer = true;
                    break;
                case "2":
                    rightAnswer = false;
                    break;
                default:
                    alert("Wrong value!");
                    this.addYesNoQuestion();
                    break;
            }
            let question = new quiz.YesNoQuestion(questionText, rightAnswer);
            Quiz.questions.push(question);
        }
        static addValuationQuestion() {
            let questionText = prompt("Please enter your question:");
            let rightAnswer = Number(prompt("Please enter the right answer as number:"));
            let tolerance = Number(prompt("Please enter the tolerance as number:"));
            let question = new quiz.ValuationQuestion(questionText, rightAnswer, tolerance);
            Quiz.questions.push(question);
        }
        static addSingleChoiceQuestion() {
            let answers = [];
            let questionText = prompt("Please enter your question:");
            let rightAnswer = prompt("Please enter the right answer:");
            answers.push(rightAnswer);
            let addMore = true;
            while (addMore) {
                let wrongAnswer = prompt("Please enter a wrong answer:");
                answers.push(wrongAnswer);
                let addMoreText = prompt("Do you wish to add some more wrong answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMore = true;
                }
                else {
                    addMore = false;
                }
            }
            let question = new quiz.SingleChoiceQuestion(questionText, answers, rightAnswer);
            Quiz.questions.push(question);
        }
        static addMultipleChoiceQuestion() {
            let answers = [];
            let rightAnswers = [];
            let questionText = prompt("Please enter your question:");
            let numberOfRightAnswers = 0;
            let addMoreRightAnswers = true;
            while (addMoreRightAnswers) {
                let rightAnswer = prompt("Please anter a right answer:");
                answers.push(rightAnswer);
                rightAnswers.push(rightAnswer);
                numberOfRightAnswers = numberOfRightAnswers + 1;
                let addMoreText = prompt("Do you wish to add some more right answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMoreRightAnswers = true;
                }
                else {
                    addMoreRightAnswers = false;
                }
            }
            let addMoreWrongAnswers = true;
            while (addMoreWrongAnswers) {
                let wrongAnswer = prompt("Please anter a wrong answer:");
                answers.push(wrongAnswer);
                let addMoreText = prompt("Do you wish to add some more wrong answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMoreWrongAnswers = true;
                }
                else {
                    addMoreWrongAnswers = false;
                }
            }
            let question = new quiz.MultipleChoiceQuestion(questionText, answers, numberOfRightAnswers, rightAnswers);
            Quiz.questions.push(question);
        }
        static addFreeTextQuestion() {
            let questionText = prompt("Please enter your question:");
            let rightAnswer = prompt("Please enter the right answer:");
            let question = new quiz.FreeTextQuestion(questionText, null, rightAnswer);
            Quiz.questions.push(question);
        }
        static askRandomQuestion() {
            let randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
            if (randomQuestion instanceof quiz.YesNoQuestion) {
                let question = randomQuestion;
                question.checkAnswer();
            }
            else if (randomQuestion instanceof quiz.ValuationQuestion) {
                let question = randomQuestion;
                question.checkAnswer();
            }
            else if (randomQuestion instanceof quiz.SingleChoiceQuestion) {
                let question = randomQuestion;
                question.checkAnswer();
            }
            else if (randomQuestion instanceof quiz.MultipleChoiceQuestion) {
                let question = randomQuestion;
                question.checkAnswer();
            }
            else if (randomQuestion instanceof quiz.FreeTextQuestion) {
                let question = randomQuestion;
                question.checkAnswer();
            }
        }
        loadData() {
        }
    }
    Quiz.score = 0;
    Quiz.questions = [];
    quiz.Quiz = Quiz;
})(quiz || (quiz = {}));
//# sourceMappingURL=Quiz.js.map