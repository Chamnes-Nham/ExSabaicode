// Define a simple Car object
let Car = {
    brand: "Toyota",
    color: "blue",
    year: 2020,

    // Method to start the car
    start: function() {
        console.log("Starting the " + this.color + " " + this.brand);
    },

    // Method to stop the car
    stop: function() {
        console.log("Stopping the " + this.color + " " + this.brand);
    }
};

// Using the Car object without knowing internal details
Car.start(); // Output: Starting the blue Toyota
Car.stop(); // Output: Stopping the blue Toyota
