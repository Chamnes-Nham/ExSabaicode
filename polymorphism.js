// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to make sound (to be overridden by subclasses)
    makeSound() {
        console.log("Some generic sound");
    }
}

// Subclass 1
class Dog extends Animal {
    // Method overriding
    makeSound() {
        console.log(this.name + " says Woof!");
    }
}

// Subclass 2
class Cat extends Animal {
    // Method overriding
    makeSound() {
        console.log(this.name + " says Meow!");
    }
}

// Creating instances of different animals
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Calling the same method on different objects
dog.makeSound(); // Output: Buddy says Woof!
cat.makeSound(); // Output: Whiskers says Meow!
