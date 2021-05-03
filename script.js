// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword(145);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghiklmnopqrstuvwxyz";
    var SpecialCharacters = "{}[] += <;>./?*^:;%#@!|-";
    var allChars = numberChars + upperChars + SpecialCharacters + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = SpecialCharacters;
    randPasswordArray = randPasswordArray.fill(allChars, 5);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);