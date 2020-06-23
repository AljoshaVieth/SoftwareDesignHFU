"use strict";
var generics;
(function (generics) {
    class MySuper {
        sayHello() {
            return "Hi, I´m calling from MySuper class";
        }
    }
    class MySub extends MySuper {
        sayHello() {
            return "Hi, I´m calling from MySub class";
        }
    }
    class MySecondSub extends MySuper {
        sayHello() {
            return "Hi, I´m calling from MySecondSub class";
        }
    }
    class MyContainer {
        constructor(_objects) {
            this.objects = _objects;
        }
        addObject(_object) {
            this.objects.push(_object);
        }
    }
    let test1 = new MySub();
    let test2 = new MySecondSub();
    let test = new MyContainer([test1, test2]);
    test.objects.forEach(function (object) {
        console.log(object.sayHello());
    });
})(generics || (generics = {}));
//# sourceMappingURL=Main.js.map