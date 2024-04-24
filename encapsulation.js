function Person(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    // Public method to get name
    this.getName = function() {
        return _name;
    };

    // Public method to set name
    this.setName = function(name) {
        _name = name;
    };

    // Public method to get age
    this.getAge = function() {
        return _age;
    };

    // Public method to set age
    this.setAge = function(age) {
        if (age >= 0) {
            _age = age;
        } else {
            console.log("Age can't be negative");
        }
    };
}

// Creating a new Person instance
let person1 = new Person("John", 30);

// Accessing and modifying properties using public methods
console.log(person1.getName()); // Output: John
console.log(person1.getAge()); // Output: 30

person1.setName("Alice");
person1.setAge(25);

console.log(person1.getName()); // Output: Alice
console.log(person1.getAge()); // Output: 25

// Trying to access private variables directly will result in undefined
console.log(person1._name); // Output: undefined
console.log(person1._age); // Output: undefined