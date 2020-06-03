"use strict";
var quiz;
(function (quiz) {
    var readline = require("readline");
    let questions;
    let userSelection = readline("");
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("What do you think of Node.js? ", function (answer) {
        console.log("Thank you for your valuable feedback:", answer);
        rl.close();
    });
})(quiz || (quiz = {}));
//# sourceMappingURL=Main.js.map