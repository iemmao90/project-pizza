// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let username = prompt("What's your name?");

alert(`Hi and welcome ${username}!`);

// Step 2 - Food choice

let foodChoice = prompt(`What are you having today?

1 - Pizza
2 - Pasta
3 - Salad

Select by entering a number!`);

let selectedFood = '';

switch (foodChoice) {
  case '1':
    selectedFood = 'Pizza';
    break;
  case '2':
    selectedFood = 'Pasta';
    break;
  case '3':
    selectedFood = 'Salad';
    break;
  default:
    alert('Incorrect value!');
}

alert(`${selectedFood} is a good choice!`);

// Step 3 - Subtype choice

let subtypeFoodChoice;

switch (foodChoice) {
  case '1':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?
        1 - Funghi
        2 - Vesuvio
        3 - Hawaii
      Select by entering a number!`
    );
    break;
  case '2':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?
        1 - Bolognese
        2 - Arrabiata
        3 - Carbonara
      Select by entering a number!`
    );
    break;
  case '3':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?
        1 - Burrata
        2 - Caesar
        3 - Caprese
      Select by entering a number!`
    );
    break;
  default:
    alert('Incorrect value!');
}

alert(`${subtypeFoodChoice} is an excellent choice!`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
