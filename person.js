const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String, // Changed from Number to String
    required: true // Fixed typo from require to required
  },
  age: {
    type: Number,
    required: true // Ensures age is required
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"], // Ensures work is one of these values
    required: true // Fixed typo from require to required
  },
  mobile: {
    type: String,
    required: true // Fixed typo from require to required
  },
  email: {
    type: String,
    required: true, // Fixed typo from require to required
    unique: true // Ensures email is unique
  },
  address: {
    type: String,
    required: true // Ensures address is required
  },
  salary: {
    type: Number,
    required: true // Fixed typo from require to required
  }
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;

// Example usage: Creating a new person
const person = new Person({
  name: "Riyaj",
  age: 21,
  work: "manager",
  mobile: "5025-7822-78",
  email: "ritya@125@gmail.com",
  address: "4/12 Aurangabad",
  salary: 545255
});

person.save()
  .then(() => console.log('Person saved successfully!'))
  .catch(err => console.error('Error saving person:', err));
