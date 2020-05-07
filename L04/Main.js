"use strict";
let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
while (0 < subjects.length) {
    let verse = getVerse();
    console.log(verse);
    document.write("<p>" + verse + "</p>");
}
function getVerse() {
    return popRandomElement(subjects) + " " + popRandomElement(verbs) + " " + popRandomElement(objects);
}
function popRandomElement(array) {
    let index = Math.floor(Math.random() * array.length);
    return array.splice(index, 1).toString();
}
//# sourceMappingURL=Main.js.map