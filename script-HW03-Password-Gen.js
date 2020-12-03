// Assignment Code
var generateButton = document.getElementById("generate");

// Write password to the #password input
function generate() {
  var onlyUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var onlyLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var onlySpecialChar = ['!','@','#','$','%','&','*','=','-','+'];
  var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = superDuperFinalPassword;
}

function generateOptions() {
  //var userSelection = prompt("How many characters do you want your password to have?");

  // if (userSelection <=8) {
  // alert ("Password Must Be at Least 8 Characters in Length");}

  // if (userSelection >=128) {
  // alert ("Password Must Be Less than 128 Characters in Length");}

  var length = parseInt(prompt("How many characters do you want your password to have?"));

  // for (var i = userSelection; userSelection < 8 || userSelection > 128; userSelection = prompt("How many characters do you want your password to have?")) {
  // alert("Password must be at least 8 characters in length, but no more than 128")};

  if (length < 8) {
      alert('Your password has to be at least 8 characters');
      return;
    }
  if (length > 128) {
      alert('Your password cannot be no more than 128 characters');
      return;
    }

//ask user for special characters
var couldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
//ask user for numeric characters
var couldIncludeNum = confirm("Do you want to include numeric characters?");

//ask user for lowercase characters
var couldIncludeLower = confirm("Do you want to include lowercase characters?");

//ask user for uppercase characters
var couldIncludeUpper = confirm("Do you want to include uppercase characters?");

if (!couldIncludeLower && !couldIncludeUpper && !couldIncludeNum && !couldIncludeSpecialCharacters) {
  alert("Your password has to contain at least one special, numeric, lowercase, and uppercase character");
  return;
}

var inquiryOptions = {
  length: length,
  specialCharacters: couldIncludeSpecialCharacters,
  numeric: couldIncludeNum,
  lowerCase: couldIncludeLower,
  upperCase: couldIncludeUpper,
}

  return inquiryOptions;
}

function generatePassword() {

  var options = inquiryOptions();
  console.log(options)

  var passwordPossibilities = [];
  console.log(passwordPossibilities)

if (options.specialChar) {
  for (i = 0; i < onlySpecial.length; ++i) {
    passwordPossibilities.push(onlySpecial[i]);
  }
}
if (options.numeric) {
  for (i = 0; i < onlyNumeric.length; ++i) {
    passwordPossibilities.push(onlyNumerics[i]);
  }
}
if (options.lowerCase) {
  for (i = 0; i < onlyLower.length; ++i) {
    passwordPossibilities.push(onlyLower[i]);
  }
}
if (options.upperCase) {
  for (i = 0; i < onlyUpper.length; ++i) {
    passwordPossibilities.push(onlyUpper[i]);
  }
}

var decidedPassword = [];

for (let i = 0; i < options.length; ++i) {
  var randomSelector = Math.floor(Math.random() * Math.floor(passwordPossibilities.length));
    decidedPassword.push(passwordPossibilities[randomSelector]);
}

console.log(decidedPassword)

var superDuperFinalPassword = decidedPassword.join("");
console.log(superDuperFinalPassword)

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
