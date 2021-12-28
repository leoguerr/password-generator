// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthChoice;
var uppercase; 
var lowercase;
var symbol;
var numbers;

//Password criteria 
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symb = ["~","!","@","#","$","&","*"];
var nums = ["1","2","3","4","5","6","7","8","9"];
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Function to generate secure password

function generatePassword(){
  var lengthChoice = prompt("Please select a password length between 8-128 characters");
  //Confirmation of password criteria 
upper=confirm("Click 'OK' to use uppercase letters");
lower=confirm("Click 'OK' to use lowercase letters");
symb=confirm("Click 'OK' to confirm using special symbols");
nums=confirm("Click 'OK' to use numbers")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ``