// ul list 
const list = document.querySelector(".guessed-letters");
// button with text "Guess"
const button = document.querySelector(".guess");
// text input of the form
const textInput = document.querySelector(".letter")
// word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// displays remaining guesses
const remainingGuesses = document.querySelector(".remaining");
// span that displays how many guesses you have
const span = document.querySelector(".remaining span");
// message that tells you guessed a letter
const message = document.querySelector(".message");
// hidden button
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

const letter = function (word) { // creating a function
    const placeholders = []; // create an array to place the letters 
    for(const character of word) { // for of loop to loop each word
        console.log(character) // console log the words, character
        placeholders.push("●"); // the push function pushes the circle symbol to represent each letter in magnolia
    }
    wordInProgress.innerText = placeholders.join(""); // 
}
letter(word);


button.addEventListener("click", function (e) {
    e.preventDefault();
    const input = textInput.value
    console.log(input);
    textInput.value = "";

}
);
const verify = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if(input.length = "") {
        console.log("Please, input a letter")
    }else if(input.lentgh > 1) {
        console.log("Please input one letter")
    } else if(!input.match(acceptedLetter)) {
        console.log("You have to input a letter from A-Z")
    }else{
        return input;
    }
};