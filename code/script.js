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
  default:
    alert('Incorrect choice!');
    break;
}

alert(`${selectedFood} is a good choice!`);

// Step 3 - Subtype choice

// let subtypeFoodChoice = prompt(`What kind of ${foodChoice}

// Select by entering a number!`);

// alert(`${foodChoice} is a good choice!`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
