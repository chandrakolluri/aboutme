var userName = prompt("Please enter your name");
console.log('Hi ' + userName + ". Welcome!" );
alert('Hi ' + userName + '. Welcome!');
alert('Lets play a guessing game to know more about me');

var states = prompt('Can you guess the number of states I have resided in USA?');
console.log('Number of states:', states);

if (states === '6' || states === '5') {
    alert('Good guess! Yes, I have resided in ' + states + ' states' );
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

var cars = prompt('Can you guess the number of cars I have?');
console.log('Number of cars:', cars);

if (parseInt(cars) === 2) {
    alert('Good guess! Yes, I have ' + cars + ' cars' );
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

var years = prompt('Can you guess the years of experience I have?');
console.log('Number of years of experience:', years);

if (years === '12') {
    alert('Good guess! Yes, I have ' + years + ' years of experience' );
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

var birthMonth = prompt('Can you guess my birth month (please enter the month number)?');
console.log('My birth month:', birthMonth);

if (birthMonth === '5') {
    alert('Good guess! my birth month is May (' + birthMonth + ')' );
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

var favDay = prompt('Can you guess my favorite day of the week (please enter the full day name like Monday..)? ');
console.log('My favorite day of the week:', favDay);

if (favDay.toLocaleUpperCase('en-US') === 'FRIDAY') {
    alert('Good guess! My favorite day is :' + favDay);
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

var favNumber = prompt('Can you guess my favorite number between 1 to 20? ');
console.log('My favorite number:', favNumber);

if (favDay.toLocaleUpperCase('en-US') === 'FRIDAY') {
    alert('Good guess! My favorite day is :' + favDay);
} else {
    alert('Sorry, its wrong guess. Lets try another question');
}

alert('Now, guess my favorite number. You have 4 chances to try :)')
var favNumber;
var counter = 1;

while (favNumber !== 9 || counter === 4) {
    favNumber = parseInt(prompt('Guess my favorite number'));

    if (favNumber < 9) {
        alert('Sorry you guessed too low. Try again');
    } else if (favNumber > 9) {
        alert('Sorry you guessed too high. Try again');
    } else if (isNaN(favNumber) || favNumber === null) {
        alert('Please enter an actual number');
    }
    counter++;
}

if (counter < 4) {
   console.log('You made right guess in ' + counter + ' tries');
   alert('You made right guess in ' + counter + ' tries');
} else {
   console.log('Sorry, 4 guesses are completed.');
   alert('Sorry, 4 guesses are completed.');
}   

alert('Now, guess the states I have resided. You have 6 chances to try :)');

var statesResided = ['Colorado', 'Washington', 'Washington DC', 'Iowa', 'Missouri', 'Maryland'];
var stateGuess = prompt('Can you guess atleast one USA states I resided? Please enter full state name : ');
var rightGuess;
var guessCounter = 1;
while (rightGuess === 'Y' || guessCounter === 6) {
  for (var i = 0; i < statesResided.length; i++) {
      console.log('Current state:', statesResided[i]);

      if (stateGuess === statesResided[i]) {
         alert('You guessed it correctly! Hurray!!');
         rightGuess = 'Y';
         break;
      }
  } 
  guessCounter++;
  if (!rightGuess) {
     alert('Meh!! - Try again. This is try ' + guessCounter);
  }
}
alert('Thanks for playing.')