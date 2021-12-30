// Assignment Code
var lengthChoice;
var uppercase; 
var lowercase;
var symbols;
var numbers;

//Password criterias
var upperC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symb = ["~","!","@","#","$","&","*"];
var nums = ["1","2","3","4","5","6","7","8","9"];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Function to generate secure password

function generatePassword() {
  lengthChoice = parseInt(prompt("Hello! Choose a length of desired password between 8-128"));
  //Validation for length if value of "0" is input 
  if (!lengthChoice){ alert("Please specify a value between 8-128"); 

 } //Validation for password length, it will re-prompt until value is true 
  while (lengthChoice <=8 || lengthChoice >=128) {
    lengthChoice = parseInt(prompt("Invalid input! Please choose between 8-128 character length"));
  } 
  //Character criteria to be selected by user 
  if (lengthChoice) { 
  uppercase=confirm("Click 'OK' to use uppercase letters");
  lowercase=confirm("Click 'OK' to use lowercase letters");
  symbols=confirm("Click 'OK' to use special symbols");
  numbers=confirm("Click 'OK' to use numbers");
  }
  //Validation if user does not select any criteria 
  if (!uppercase && !lowercase && !symbols && !numbers) {
    choices = alert("must choose atleast one criteria");
  }
//Validation if user chooses all criteria 
  if (uppercase && lowercase && symbols && numbers){
    choices = symb.concat(nums, upperC, lowerC);
  }

 // password placeholder that will hold arrays  
 var password = [];

 // For function to randomize selected arrays 
 for (var i = 0; i < lengthChoice; i++) {
     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
     password.push(pickChoices)};
// Join method to add array choices to a string    
   var passcode = password.join('');
   UserInput(passcode);
   return passcode;
}
// Retrives string to place into "password" placeholder
function UserInput(passcode) {
   document.getElementById("password").textContent = passcode;
 };
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
