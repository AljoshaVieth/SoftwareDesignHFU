namespace quiz {
  
    export class Quiz {
        static score: number = 0;
        static questions: Question[] = [];

        static start(): void {
            Quiz.printMainMenu();
        }

        static printMainMenu(): void {
            let userSelection: string = prompt("Welcome, your current score is: " + Quiz.score + "\n" + "Please select one option:\n" +
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

        static addQuestion(): void {
            let questionType: string = prompt("Please select the type of question you wish to add:\n"
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



        static addYesNoQuestion(): void {
            let questionText: string = prompt("Please enter your question:");
            let rightAnswerText: string = prompt("Please select the right answer: \n[1]Yes\n[2]No");
            let rightAnswer: boolean = false;
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
            let question: YesNoQuestion = new YesNoQuestion(questionText, rightAnswer);
            Quiz.questions.push(question);
        }

        static addValuationQuestion(): void {
            let questionText: string = prompt("Please enter your question:");
            let rightAnswer: number = Number(prompt("Please enter the right answer as number:"));
            let tolerance: number = Number(prompt("Please enter the tolerance as number:"));
            let question: ValuationQuestion = new ValuationQuestion(questionText, rightAnswer, tolerance);
            Quiz.questions.push(question);
        }

        static addSingleChoiceQuestion(): void {
            let answers: string[] = [];
            let questionText: string = prompt("Please enter your question:");
            let rightAnswer: string = prompt("Please enter the right answer:");
            answers.push(rightAnswer);
            
            let addMore: boolean = true;
            while (addMore) {
                let wrongAnswer: string = prompt("Please enter a wrong answer:");
                answers.push(wrongAnswer);
                let addMoreText: string = prompt("Do you wish to add some more wrong answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMore = true;
                } else {
                    addMore = false;
                }
            }
            let question: SingleChoiceQuestion = new SingleChoiceQuestion(questionText, answers, rightAnswer);
            Quiz.questions.push(question);
        }

        static addMultipleChoiceQuestion(): void {
            let answers: string[] = [];
            let rightAnswers: string [] = [];
            let questionText: string = prompt("Please enter your question:");
            let numberOfRightAnswers: number = 0;
            let addMoreRightAnswers: boolean = true;
            while (addMoreRightAnswers) {
                let rightAnswer: string = prompt("Please anter a right answer:");
                answers.push(rightAnswer);
                rightAnswers.push(rightAnswer);
                numberOfRightAnswers = numberOfRightAnswers + 1;
                let addMoreText: string = prompt("Do you wish to add some more right answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMoreRightAnswers = true;
                } else {
                    addMoreRightAnswers = false;
                }
            }

            let addMoreWrongAnswers: boolean = true;
            while (addMoreWrongAnswers) {
                let wrongAnswer: string = prompt("Please anter a wrong answer:");
                answers.push(wrongAnswer);

                let addMoreText: string = prompt("Do you wish to add some more wrong answers?\n[1]Yes\n[2]No");
                if (addMoreText == "1") {
                    addMoreWrongAnswers = true;
                } else {
                    addMoreWrongAnswers = false;
                }
            }

            let question: MultipleChoiceQuestion = new MultipleChoiceQuestion(questionText, answers, numberOfRightAnswers, rightAnswers);
            Quiz.questions.push(question);
        }

        static addFreeTextQuestion(): void {
            let questionText: string = prompt("Please enter your question:");
            let rightAnswer: string = prompt("Please enter the right answer:");
            let question: FreeTextQuestion = new FreeTextQuestion(questionText, null, rightAnswer);
            Quiz.questions.push(question);
        }

        static askRandomQuestion(): void {
            let randomQuestion: Question = this.questions[Math.floor(Math.random() * this.questions.length)];
            if (randomQuestion instanceof YesNoQuestion) {
                let question: YesNoQuestion = <YesNoQuestion> randomQuestion;
                question.checkAnswer();
            } else if (randomQuestion instanceof ValuationQuestion) {
                let question: ValuationQuestion = <ValuationQuestion> randomQuestion;
                question.checkAnswer();
            } else if (randomQuestion instanceof SingleChoiceQuestion) {
                let question: SingleChoiceQuestion = <SingleChoiceQuestion> randomQuestion;
                question.checkAnswer();
            } else if (randomQuestion instanceof MultipleChoiceQuestion) {
                let question: MultipleChoiceQuestion = <MultipleChoiceQuestion> randomQuestion;
                question.checkAnswer();
            } else if (randomQuestion instanceof FreeTextQuestion) {
                let question: FreeTextQuestion = <FreeTextQuestion> randomQuestion;
                question.checkAnswer();
            }

        }



    }

    class Data {
        array: { text: string }[];
      }
      
    async function loadData(_filename: string): Promise<Data> {
        console.log("Start fetch");
    
        let response: Response = await fetch(_filename);
    
        let text: string = await response.text();
        let json: Data = JSON.parse(text);
        // alternative: json = await response.json();
    
        console.log("Done fetch");
        return (json);
      }
    
    function saveData(_content: string, _filename: string): void {
        let blob: Blob = new Blob([_content], { type: "text/plain" });
        let url: string = window.URL.createObjectURL(blob);
        //*/ using anchor element for download
        let downloader: HTMLAnchorElement;
        downloader = document.createElement("a");
        downloader.setAttribute("href", url);
        downloader.setAttribute("download", _filename);
        document.body.appendChild(downloader);
        downloader.click();
        document.body.removeChild(downloader);
        window.URL.revokeObjectURL(url);
      }
    
}