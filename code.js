// Rewrites an element of the html to indicate that you've selected a game to play. 
function rewrite_welcome(){
    document.getElementById("sample").innerHTML = "Ok, let\'s play! Your results are in the Console."
}
// Function to generate a random number between min and max inclusively.
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

//Craps game function
function craps_game() {
    let x = getRandomNumber(1, 6); // Roll first die
    let y = getRandomNumber(1, 6); // Roll second die
    console.log(x); // Print first die value
    console.log(y); // Print second die value
    let sum = x + y; // add rolled values
    console.log(sum); // print rolled values
    let isEven = (x%2 == 0) // checks to see if the first die rolled an even number
    let sumSeven = (x+y == 7) // checks to see if sum is 7
    let sumEleven = (x+y ==11) // checks to see if sum is 11
    
    if (sumSeven || sumEleven) {
        console.log("Lose"); // if it is 11 or 7 you lose
    } else if (x === y && isEven) {
        console.log("You Win!"); // if you roll double even numbers you win
    } else {
        console.log("Push. Try again?"); // if you roll mismatched or double odd numbers, push you roll again. 
    }
}

