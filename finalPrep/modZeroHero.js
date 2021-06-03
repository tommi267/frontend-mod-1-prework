// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = 'Mr.T';

var specialAbility = 'Invisible'
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = 'Hello my name is '+ heroName+ '!';
var catchphrase =`My special power is ${specialAbility}.`;
console.log(greeting);
console.log(catchphrase);
// Declare two variables - power AND energy - set to integers
var power = 1;
var energy = 10;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
console.log(fullPower);
console.log(fullEnergy);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Work','Bills','Taxes'];
var sidekick = ['Money','Beer','Food']
// Print the first sidekick to your console
console.log(sidekick[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('IRS');
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekick.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekick);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel,saveTheDay,badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  }else if (dangerLevel >= 10 && dangerLevel <= 50){
    console.log(saveTheDay);
  }else {
    console.log('Meh. Hard Pass');
  }
}

assessSituation(10,'Save the day','Im scared');
assessSituation(51,'Save the day','Im scared');
assessSituation(3,'Save the day','Im scared');
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name:'Godzilla',
  smell:'Rotten eggs',
  weight:1232,
  citiesDestroyed:['Tokyo','Hong Kong','Seoul'],
  luckyNumbers:[7,13,666],
  address:{
    number:000,
    street:'Ocean',
    state:'Japan',
    zip:00666
  }
}
console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name,superpower,age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.powerLevel = 100;
    this.energyLevel = 50;
    }
    sayName(){
      console.log(`I'm ${this.name}!`);
    }
    maximizeEnergy(){
      this.energyLevel= 1000;
    }
    gainPower(number){
      this.powerLevel= number + this.powerLevel
    }
}

var ironMan = new SuperHero('Tony Stark','Powered Armor Suit',48);
console.log(ironMan);
ironMan.sayName();
ironMan.maximizeEnergy();
console.log(ironMan);
ironMan.gainPower(666);
console.log(ironMan);

var hulk = new SuperHero('Bruce Banner','Superhuman Strength',34);
console.log(hulk);
hulk.sayName();
hulk.maximizeEnergy();
console.log(hulk);
hulk.gainPower(9999);
console.log(hulk);

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
// remebering the class format

// What parts felt most comfortable to you?
// creating class
// What skills do you need to continue to practice before starting Mod 1?
// with practice I believe I will become better at time management 
