// Object creation using Objectliteral
const person1 = {
    name: "Bob",
    age: 25
};

console.log("The output for the Objectliteral");
console.log(" "+person1.name);
console.log(" "+person1.age); 


// person1 = {name:"John",age:30};
// console.log(person1);
// person1 = {name:"John",age:30};
        // ^

        // TypeError: Assignment to constant variable.
        //     at Object.<anonymous> (C:\22b81a12c2_awt\04-01-2025\Objectcreation.js:11:9)
        //     at Module._compile (node:internal/modules/cjs/loader:1565:14)
        //     at Object..js (node:internal/modules/cjs/loader:1708:10)
        //     at Module.load (node:internal/modules/cjs/loader:1318:32)
        //     at Function._load (node:internal/modules/cjs/loader:1128:12)
        //     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        //     at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
        //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
        //     at node:internal/main/run_main_module:36:49
        
// person1.name = "John";
// person1.age = 25;
// console.log(person1["name"]);
// console.log(person1.age); //This will work even we use const for person1 since here we are modifying the properties values


//Object creation using new keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person2 = new Person("Alice", 30);
console.log("The output for Object creation using new keyword")
console.log(" "+person2["name"]); //as the property name is not defined so person2[name] giving output as name undefined, when the property is given "name" then the output will be Alice
console.log(" "+person2.age);  

// console.log(person2[age])--not working 
// person2 = new Person("John",30);
// console.log(person2["name"]);
// console.log(person2.age); This will work since we are using let keyword

// Object creation using Object Constructor
const person = new Object();

person.name = "Jane Doe";
person.age = 30;
person.greet = function() {
    console.log(` Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
console.log("The output for Object creation using constructor");
console.log(" "+person.name);  
console.log(" "+person.age);   
person.greet();   



