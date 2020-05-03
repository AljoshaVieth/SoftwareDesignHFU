"use strict";
let input = window.prompt("Please enter your message", "Die Maus frisst etwas");
backward(input);
backward(backSentence(input));
function backward(satz) {
    let endResult = "";
    let splitted = satz.split(" ");
    let j = 1;
    while (j != splitted.length + 1) {
        endResult = endResult + splitted[splitted.length - j] + " ";
        j++;
    }
    console.log(endResult);
}
function backSentence(satz) {
    let endResult2 = "";
    let j = 1;
    while (j < (satz.length - 1) + 2) {
        endResult2 = endResult2 + satz[satz.length - j];
        j++;
    }
    console.log(endResult2);
    return endResult2;
}
//# sourceMappingURL=Main.js.map