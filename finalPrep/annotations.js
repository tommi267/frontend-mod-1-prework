// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear is a function that takes in 4 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// Declare the varible greeting and what it will do
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Declare the varible demographics which is an array containing name and age
  var demographics = [name, age];
// Declare the varible powerSaying which will tell you it specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Declare builtBear which is an object
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// return the builtBear object but wont log anything in terminal because it not console.log
  return builtBear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
//FizzBuzz is a function that takes in 3 parameters
function fizzBuzz(num1, num2, range) {
// an for statement that will run when i is less than or equal to range
  for (var i = 0; i <= range; i++) {
// an if  statment that will run if i % num1 and i % num2 is equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
// will console log fizzbuzz if the logic is true
      console.log('fizzbuzz');
    }
// if the if statment is not trigger the  else if will run and if true will return fizz
    else if (i % num1 === 0) {
      console.log('fizz');
    }
// if the previous statment is not true the program will run this and if true will return buzz
    else if (i % num2 === 0) {
      console.log('buzz');
    }
// if all the above is not true the program will run this and return the value of i
    else {
      console.log(i);
    }
  }
}
// the program will run this until var i is greater the range of 100
fizzBuzz(3, 5, 100);
// fizzbuzz is spell with a lowercase b and will not run 
fizzbuzz(5, 8, 400);
