namespace quiz {

  class Main {

  questions: Question[];

  public main(): void {
    console.log("[1] Neue Frage erstellen");
    console.log("[2] Eine Frage beantworten");
    console.log("[3] Programm beenden");
    let typeOfAction: string = prompt("Wähle eine Option:");
    
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
    }


  }
    


}

      