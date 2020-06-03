"use strict";
let input = window.prompt("Please enter your message", "Die Maus frisst etwas");
backward(input);
backward(backSentence(input));
// Jirka meinte gerade (13.05.2020 10:53 Uhr): "Satz steht auf deutsch. Das geht gar nicht." 
// Außerdem fehlt der Underscore beim Parameter (_sentence)
// backward ist nicht eindeutig, was ist rückwerts?
function backward(satz) {
    let endResult = ""; // Warum endResult? 
    let splitted = satz.split(" "); // splitted ist nicht eindeutig? Was wurde gesplittet? (splittedSentence)
    let j = 1; // Warum j? Was ist mit i?
    while (j != splitted.length + 1) { // Warum " != " und nicht " <= "
        endResult = endResult + splitted[splitted.length - j] + " ";
        j++;
    }
    console.log(endResult);
}
// backSentence?, Parameter deutsch, Underscore fehlt
function backSentence(satz) {
    let endResult2 = ""; // Anderer Scope, die zwei kann wegbleiben
    let j = 1; // siehe oben
    while (j < (satz.length - 1) + 2) {
        endResult2 = endResult2 + satz[satz.length - j];
        j++;
    }
    console.log(endResult2);
    return endResult2;
}
//# sourceMappingURL=Main.js.map