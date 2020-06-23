namespace generics {

    class MySuper {
        public sayHello(): string {
            return "Hi, I´m calling from MySuper class";
        }
    }

    class MySub extends MySuper {
        public sayHello(): string {
            return "Hi, I´m calling from MySub class";
        }
    }

    class MySecondSub extends MySuper {
        public sayHello(): string {
            return "Hi, I´m calling from MySecondSub class";
        }
    }

    class MyContainer<T extends MySuper> {
        public objects: T[];

        constructor(_objects: T[]){
            this.objects = _objects;
        }

        public addObject(_object: T): void {
            this.objects.push(_object);
        }
    }


    let test1: MySuper = new MySub();

    let test2: MySuper = new MySecondSub();

    let test: MyContainer<MySub> = new MyContainer<MySub>([test1, test2]);

    test.objects.forEach(function (object){
        console.log(object.sayHello()); 
    });

}