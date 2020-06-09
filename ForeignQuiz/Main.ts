namespace quiz {

  class Main {

  questions: Question[];

  public main(): void {

    // TODO fill questions array with pre-defined questions

    console.log("[1] Neue Frage erstellen");
    console.log("[2] Eine Frage beantworten");
    console.log("[3] Programm beenden");
    let typeOfAction: string = prompt("Wähle eine Option:"); // name this variable "choice"
    
    switch (typeOfAction) {
      case "1":
        // TODO addQuestion
        break;
      case "2":
        // TODO answerQuestion
        break;
      case "3": console.log("Tschüss...");
                break;
      default:

    }
  }
    


    public addQuestion(): void {
      let typeOfQuestion: string = prompt("Wähle eine Option:");
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

    public addSingleChoiceQuestion(): void {
      let questionText: string = prompt("Gib eine Frage ein:");

      let newQuestion: SingleChoiceQuestion = new SingleChoiceQuestion(questionText);
      newQuestion.addAnswer();

    }
    
    // Add addMultipleChoiceQuestion()
    
    // Add addYesNoQuestion()
    
    // Add addEstimateQuestion()
    
    // Add addTextQuestion()
    
    // Add answerQuestion()


  }
    


}

      
