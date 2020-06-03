"use strict";
var Debugging;
(function (Debugging) {
    /**
     * Simple console logs
     */
    console.groupCollapsed("Simple logs");
    console.log("Dies ist eine Log-Nachricht");
    console.info("Dies ist eine Info-Nachricht");
    console.error("Dies ist eine Fehler-Ausgabe");
    console.warn("Dies ist eine Warnung");
    console.groupEnd();
    /**
     * Log several objects
     */
    console.groupCollapsed("Complex logs");
    let x = 10;
    let y = "Hallo";
    let a = [123, 321, 34];
    let o = { firstname: "Egzon", lastname: "Demaj", age: 25 };
    console.log(x, y, a, o);
    let h = document.querySelector("h1");
    console.log(h);
    console.groupEnd();
    /**
     * Log a counter
     */
    console.groupCollapsed("Count");
    for (let i = 0; i < 10; i++)
        console.count("Counter");
    console.groupEnd();
    /**
     * Log an array of objects as table
     */
    console.groupCollapsed("Table of objects");
    let studies = [];
    studies.push(o);
    studies.push({ firstname: "Manuel", lastname: "Proß", age: 24 });
    studies.push({ firstname: "Christian", lastname: "Micka", age: 27 });
    studies.push({ firstname: "Vincent", lastname: "Junghans", age: 21 });
    console.table(studies);
    console.groupEnd();
    /**
     * Log the time ellapsed during some calculations
     */
    console.groupCollapsed("Time");
    console.time("Time");
    console.log("1263 / 2382 * 2321 = " + 1263 / 2382 * 2321);
    console.timeEnd("Time");
    console.groupEnd();
    /**
     * Assertions
     */
    console.groupCollapsed("Assertion");
    console.assert(false, "TestAssertFalse");
    console.assert(true, "TestAssertTrue");
    console.groupEnd();
    //debugger;
    //alert("Dies ist ein modales Nachrichtenfenster");
})(Debugging || (Debugging = {}));
//# sourceMappingURL=Main.js.map