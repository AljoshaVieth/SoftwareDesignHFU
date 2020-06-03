"use strict";
var familytree;
(function (familytree) {
    class Person {
        constructor(_firstName, _lastName, _birthDate, _mom, _dad) {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.birthDate = _birthDate;
            this.mom = _mom;
            this.dad = _dad;
        }
    }
    class FamilyTree {
        find(_person) {
            let ret = null;
            if (_person.lastName != "Battenberg") {
                return _person;
            }
            ret = this.find(_person.mom);
            if (ret != null) {
                return ret;
            }
            ret = this.find(_person.dad);
            return ret;
        }
        buildTree() {
            return new Person("Willi", "Cambridge", new Date("1982, 07, 21"), new Person("Diana", "Spencer", new Date("1961, 07, 01"), new Person("Franzi", "Roche", new Date("1936, 01, 20"), new Person("Ruth", "Gill", new Date("1908, 06, 07")), new Person("Moritz", "Roche", new Date("1885, 07, 08"))), new Person("Eddie", "Spencer", new Date("1924, 01, 24"), new Person("Cynthia", "Hamilton", new Date("1897, 08, 16")), new Person("Albert", "Spencer", new Date("1892, 05, 23")))), new Person("Charlie", "Wales", new Date("1948, 11, 14"), new Person("Else", "Windsor", new Date("1926, 04, 21"), new Person("Lisbeth", "Bowes-Lyon", new Date("1900, 08, 04")), new Person("Schorsch-Albert", "York", new Date("1895, 12, 14"))), new Person("Philip", "Battenberg", new Date("1921, 06, 10"), new Person("Alice", "Battenberg", new Date("1885, 02, 25")), new Person("Andi", "ElGreco", new Date("1882, 02, 01")))));
        }
    }
    class Program {
        run() {
            let root = FamilyTree.b;
            let found = FamilyTree.find(root);
        }
    }
})(familytree || (familytree = {}));
//# sourceMappingURL=Main.js.map