"use strict";
var quiz;
(function (quiz) {
    class Main {
        main() {
            // TODO fill questions array with pre-defined questions
            console.log("[1] Neue Frage erstellen");
            console.log("[2] Eine Frage beantworten");
            console.log("[3] Programm beenden");
            let typeOfAction = prompt("Wähle eine Option:");
            switch (typeOfAction) {
                case "1":
                    // TODO addQuestion
                    break;
                case "2":
                    // TODO answerQuestion
                    break;
                case "3":
                    console.log("Tschüss...");
                    break;
                default:
            }
        }
        addQuestion() {
            let typeOfQuestion = prompt("Wähle eine Option:");
            switch (typeOfQuestion) {
                case "1":
                    // TODO SingleChoice
                    break;
                case "2":
                    // TODO MultipleChoice
                    break;
                case "3":
                    // TODO YesNO
                    break;
                case "4":
                    //TODO Estimate
                    break;
                case "5":
                    //TODO Text
                    break;
            }
        }
        addSingleChoiceQuestion() {
            let questionText = prompt("Gib eine Frage ein:");
            let newQuestion = new quiz.SingleChoiceQuestion(questionText);
            newQuestion.addAnswer();
        }
    }
})(quiz || (quiz = {}));
//# sourceMappingURL=Main.js.map