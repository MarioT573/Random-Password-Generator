// Defining an array with values for each password criteria
var parameterValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890", `!#$%&'()*+,-./:;<=>?@[]^_{}|~`];
// Defining an array that will have values added from parameterValues based off user input
var newparamValues = [];
var passwordResult = "";

function passwordPrompts() {
  // Resetting passwordResult and newparamValues for each time the button is clicked
  passwordResult = "";
  newparamValues = [];

  var lengthChoice = prompt("How long do you want your password? (Select a number between 8 and 128)");

  // If statement here to immediately give an alert when a number outside the valid range is chosen, and default to 10
  // otherwise, parse the string input into a number
  if ((Number(lengthChoice) >= 8) && (Number(lengthChoice) <= 128)) {
    lengthChoice = Number(lengthChoice);
  } else {
    alert("That is not in the range. Your number will default to a length of 10.");
    lengthChoice = 10;
  }

  // Prompt user for various password creation criteria
  var upperChoice = prompt("Do you want upper case letters in your password? (Yes or No)");
  var lowerChoice = prompt("Do you want lower case letters in your password? (Yes or No)");
  var numericsChoice = prompt("Do you want numbers in your password? (Yes or No)");
  var specialCharsChoice = prompt("Do you want special characters in your password? (Yes or No)"); 

  // Convert each criteria into a Boolean based off user input
  if (upperChoice == "yes" || upperChoice == "Yes") {
    upperChoice = true;
  } else {
    upperChoice = false;
  }

  if (lowerChoice == "yes" || lowerChoice == "Yes") {
    lowerChoice = true;
  } else {
    lowerChoice = false;
  }

  if (numericsChoice == "yes" || numericsChoice == "Yes") {
    numericsChoice = true;
  } else {
    numericsChoice = false;
  }

  if (specialCharsChoice == "yes" || specialCharsChoice == "Yes") {
    specialCharsChoice = true;
  } else {
    specialCharsChoice = false;
  }
  
  // If the user declines all criteria then the program will end. Otherwise, continue the program
  if ((upperChoice === false && lowerChoice === false) && (numericsChoice === false && specialCharsChoice === false)) {
    alert("Please select at least one criteria!");
  } else {
  passwordGenerate(lengthChoice, upperChoice, lowerChoice, numericsChoice, specialCharsChoice);
  }
}

function passwordGenerate(lengthChoice, upperChoice, lowerChoice, numericsChoice, specialCharsChoice) {
  // If the user selects yes for a certain criteria, the corresponding value in the parameterValues array will be appended to the newparamValues array
  if (upperChoice === true) {
    newparamValues.push(parameterValues[0]);
  }

  if (lowerChoice === true) {
    newparamValues.push(parameterValues[1]);
  }

  if (numericsChoice === true) {
    newparamValues.push(parameterValues[2]);
  }

  if (specialCharsChoice === true) {
    newparamValues.push(parameterValues[3]);
  }

  // For loop to generate the password, one character/number at a time
  for (i = 0; i < lengthChoice; i++) {
    var paramResult = newparamValues[(Math.floor(Math.random() * newparamValues.length))]
    var passChar = paramResult.charAt((Math.floor(Math.random() * paramResult.length)));
    passwordResult += passChar;
  }
  writePassword(passwordResult);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordResult) {
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompts);