class Person {

    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.introduce(); 
person2.introduce(); 