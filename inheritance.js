// Define the superclass Animal
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }


}

// Define the subclass Dog
class Dog extends Animal {
    constructor(species, sound, breed) {
        super(species, sound); // Call the superclass constructor
        this.breed = breed;
    }

   
}

// Create an instance of Dog
let dog = new Dog("Canine", "woo", "Golden Retriever");

// Access properties and call methods
console.log("Dog Species:", dog.species);
console.log("Dog Breed:", dog.breed);
console.log("Dog Sound:", dog.sound);
