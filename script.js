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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  if (!uppercase && !lowercase && !symbols && !numbers){
    choices = alert('You must choose atlease one criteria❗');
  }
//Validation if user chooses all criteria 
  if (uppercase && lowercase && symbols && numbers){
    choices = symb.concat(nums, upperC, lowerC);
  }
// Validation if user chooses 3 out of 4 
 else if (lowercase && symbols && numbers){
    choices= symb.concat(nums,lowerC);
  }
else if (uppercase && symbols && numbers){
    choices = symb.concat(nums, upperC);
  }
else if (uppercase && lowercase && numbers){
    choices = upperC.concat(nums, lowerC);
  }
else if (uppercase && lowercase && symbols){
    choices = symb.concat(upperC, lowerC);
  }
// Validation if user chooses 2 out of 4
else if (uppercase && lowercase){
    choices = upperC.concat(lowerC);
  }
else if (uppercase && symbols){
    choices = upperC.concat(symb);
  }
else if (uppercase && numbers){
    choices = upperC.concat(nums);
  }
else if (lowercase && symbols){
    choices = lowerC.concat(symb);
  }
else if (lowercase && numbers){
    choices = lowerC.concat(nums);
  }
else if (numbers && symbols){
    choices = nums.concat(symb);
  }
  // Validation if user only chooses one criteria
 else if (uppercase){
    choices = upperC
  }
 else if (lowercase){
    choices = lowerC
  }
 else if (symbols){
    choices = symb
  }
 else if (numbers){
    choices = nums
  };

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
// Retrives string "passcode" to input into "password" placeholder
function UserInput(passcode) {
   document.getElementById("password").textContent = passcode;

  }