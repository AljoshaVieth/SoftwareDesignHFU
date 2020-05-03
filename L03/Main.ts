let input: string = window.prompt("Please enter your message", "Die Maus frisst etwas");
backward(input);
backward(backSentence(input));

function backward(satz: string): void { 
    let endResult: string = "";
    let splitted: string[] = satz.split(" ");
    let j: number = 1;
    while (j != splitted.length + 1) {
        endResult = endResult +  splitted[splitted.length - j] + " ";
        j++;
    }
    console.log(endResult);
}

function backSentence(satz: string): string {
    let endResult2: string = "";
    let j: number = 1;
    while (j < (satz.length - 1) + 2) {
        endResult2 = endResult2 + satz[satz.length - j];
        j++;
    }
    console.log(endResult2);
    return endResult2;
}
