// CODE here for your Lambda Classes

class Person {
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        }
        speak() {
            console.log(`Hello my name is ${this.name}, I am from ${this.age}. `) 

        }
    }

    const person1 = new Person("Fred", "Bedrock");

    console.log(person1);
    person1.speak();



    class Instructor extends Person {
        constructor(attr) {
            super(attr);
            this.speciality = attr.speciality;
            this.favLanguage = attr.favLanguage;
            this.catchPhrase = attr.favLanguage;
        }

        demo(subject) {
            console.log(`Today we are learning about ${subject}`) 
    }
        grade(student, subject) {
            console.log(`${student.name} receives a perfect score on ${subject}`)
        }

    }

    class Students extends Person {
        constructor(attr) {
            this.previousBackground = attr.previousBackground;
            this.className = attr.className;
            this.favSubjects = attr.favSubjects;
        }

        listsSubject() {
            console.log(Students.favSubjects);
        }
        PRAssignment(subject) {
            console.log(`${Students.name} has begun sprint challenge on ${subject}`)
        }
    }
    


