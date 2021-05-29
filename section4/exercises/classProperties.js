/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------
/*
// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog{
}
var myDog1 = new Dog();
var myDog2 = new Dog();
console.log(myDog1);
console.log(myDog2);
// Prompt 2: Snack
class Snack {
}
var mySnack1 = new Snack();
var mySnack2 = new Snack();
console.log(mySnack1);
console.log(mySnack2);
// Prompt 3: Shirt
class Shirt{
}
var myShirt1 = new Shirt();
var myShirt2 = new Shirt();
console.log(myShirt1);
console.log(myShirt2);
*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.
/*
// Prompt 1: Dog
class Dog {
  constructor() {
    this.type = 'Husky';
    this.age = 2;
    this.isHungry = true;
  }
}
var dog1 = new Dog();
console.log(dog1);
// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = 'Potatoe Chips';
    this.brand = 'Lays';
    this.flavor = 'Orginal';
  }
}
var snack1 = new Snack();
console.log(snack1);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = 'Medium';
    this.color = 'Black';
    this.brand = 'Jcrew';
  }
}
var shirt1 = new Shirt();
console.log(shirt1);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(type, age, isHungry) {
    this.type = type;
    this.age = age;
    this.isHungry = isHungry;
  }
}
var dog1 = new Dog('Husky',2,true);
var dog2 = new Dog('Pitbull',3,false)
console.log(dog1);
console.log(dog2);
// Prompt 2: Snack
class Snack {
  constructor(type, brand, flavor) {
    this.type = type;
    this.brand = brand;
    this.flavor = flavor;
  }
}
var snack1 = new Snack('Potatoe Chips','Lays','Orginal');
var snack2 = new Snack('Cookies','Oreo','DoubleStuff');
console.log(snack1);
console.log(snack2);
// Prompt 3: Shirt
class Shirt {
  constructor(size, color,brand) {
    this.size = size;
    this.color = color;
    this.brand = brand;
  }
}
var shirt1 = new Shirt('Medium','Black','Jcrew');
var shirt2 = new Shirt('Large','Pink','Gap');
console.log(shirt1);
console.log(shirt2);
