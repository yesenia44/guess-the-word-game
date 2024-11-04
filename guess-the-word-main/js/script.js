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

const letter = function () {
    wordInProgress.innerText = ●;
    const symbol = ["m", "a", "g", "n", "o", "l", "i", "a"];
    console.log(symbol.join(""));

}
letter(word);