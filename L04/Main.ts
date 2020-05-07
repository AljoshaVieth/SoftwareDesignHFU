let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];

while (0 < subjects.length) {
    let verse: string = getVerse();
    console.log(verse);
    document.write("<p>" + verse + "</p>");
}

function getVerse(): string {
    return popRandomElement(subjects) + " " + popRandomElement(verbs) + " " + popRandomElement(objects);
}

function popRandomElement(array: string[]): string {
    let index: number = Math.floor(Math.random() * array.length);
    return array.splice(index, 1).toString();
}