// CODE here for your Lambda Classes

class Person {
    constructor (name, location) {
        this.name = name;
        // this.age = age;
        this.location = location;
        }
        speak() {
            return `Hello my name is ${this.name}, I am from ${this.age}. `

        }
    }

    const person1 = new Person("Fred", "Bedrock");

    console.log(person1);


    


