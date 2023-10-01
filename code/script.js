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
let subtypeFoodItems = [];

switch (foodChoice) {
  case '1':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?

        1 - Funghi
        2 - Vesuvio
        3 - Hawaii

      Select by entering a number!`
    );
    subtypeFoodItems = ['Funghi', 'Vesuvio', 'Hawaii'];
    break;
  case '2':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?

        1 - Bolognese
        2 - Arrabiata
        3 - Carbonara

      Select by entering a number!`
    );
    subtypeFoodItems = ['Bolognese', 'Arrabiata', 'Carbonara'];
    break;
  case '3':
    subtypeFoodChoice = prompt(
      `What ${selectedFood} are you having today?

        1 - Burrata
        2 - Caesar
        3 - Caprese

      Select by entering a number!`
    );
    subtypeFoodItems = ['Burrata', 'Caesar', 'Caprese'];
    break;
  default:
    alert('Incorrect value!');
}

const selectedSubtypeFood = subtypeFoodItems[+subtypeFoodChoice - 1];

alert(`${selectedSubtypeFood} is an excellent choice!`);

// Step 4 - Age

let userAge = prompt(`Is the order for an adult or a child?

Please provide your age:`);

let userType = +userAge <= 12 ? 'child' : 'adult';
let typePrice = +userAge <= 12 ? 8 : 12;

let orderValidation = prompt(
  +userAge <= 12
    ? ` Do you want to order a ${userType} 
  ${selectedFood} ${selectedSubtypeFood} for $8?
  
    Please select a number:
    1 - Yes
    2 - No`
    : ` Do you want to order an ${userType} 
    ${selectedFood} ${selectedSubtypeFood} for $12?
    
    Please select a number:
    1 - Yes
    2 - No
    `
);

// Step 5 - Order confirmation
let price;

if (orderValidation === '1') {
  alert(`You have ordered a ${userType} ${selectedFood} ${selectedSubtypeFood} for $${typePrice}.
  
  Thank you!`);
} else if (orderValidation === '2') {
  alert(`Your order has been cancelled!`);
} else {
  alert(`Please select 1 or 2!`);
}
