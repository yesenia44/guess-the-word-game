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
// player guesses
const guessedLetters = [];

const letter = function (word) { // creating a function
    const placeholders = []; // create an array to place the letters 
    for(const character of word) { // for of loop to loop each word
        console.log(character) // console log the words, character
        placeholders.push("●"); // the push function pushes the circle symbol to represent each letter in magnolia
    }
    wordInProgress.innerText = placeholders.join(""); 
}
letter(word);


button.addEventListener("click", function (e) {
    e.preventDefault();
    // clear message
    message.innerText = "";
    // input value
    const input = textInput.value;
    //console.log(input);
    // call function and save result
    const validLetter = verify(input)
    // console log result
    //console.log(validLetter)

    if (validLetter) {
        makeGuess(input)
    }


    textInput.value= "";
});

//function to verify input
const verify = function (input) {
    const acceptedLetter = /[a-zA-Z]/ //makes sure its only a letter
    if(input.length === 0) { // if it is empty, then it displays a message stating to input a letter
        message.innerText = "Please, input a letter"
    }else if(input.length > 1) { // if there is more than one letter, a message will display stating to enter one letter
        message.innerText = "Please input one letter"
    } else if(!input.match(acceptedLetter)) { // if it is not a letter, then a mesage will display to input a letter from A-Z
        message.innerText = "You have to input a letter from A-Z"
    }else{
        return input;
    }
};
const makeGuess = function (input) {
    input = input.toUpperCase(); // converts all letters to uppercase
    if(guessedLetters.includes(input)) { // conditional statement. If letters includes the same letters a message pops out
        message.innerText = "You already input the same letter. Try again."
    }else{
        guessedLetters.push(input) // adds letters to the array
        console.log(guessedLetters); // console logs the letters
        showLetters()
        showWordInProgress(guessedLetters)
    }
    
} 
const showLetters = function () {
    list.innerHTML = "";
    for(const character of guessedLetters) {
        const listItem = document.createElement("li")
        listItem.innerText = character;
        list.append(listItem);
    }
};
const showWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray)
    const showWord = [];
    

        
    
}
