const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');
const hands = document.getElementsByClassName('hand-buttons');

// enable computer decision
function computerHand() {
    const randomNum = Math.floor(Math.random() * choices.length);
    let compChoice = choices[randomNum];
    console.log(compChoice);
    compImage.style.backgroundImage = `url(/assets/images/${choices[randomNum]}.png)`;
    return compChoice;
}

// need event listener for the buttons
// make buttons listen for a click by user
// call both userHand and computerHand functions
for (let hand of hands) {
    hand.addEventListener('click', function () {
        let userChoice = this.getAttribute("value");
        userHand(userChoice);
        computerHand();
        console.log(userChoice);
    });
};

// change user image to hand choice image
function userHand(userChoice) {
    userImage.style.backgroundImage = `url(/assets/images/${userChoice}.png)`;

}

// calculate the winner
// if else if
function onClick() {

}

// get the result of (computerHand, userHand)
function getScore() {

}

// show result of computerHand() and userHand() in scoreboard
function showScore () {

}

