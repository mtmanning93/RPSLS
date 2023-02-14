const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const hands = document.getElementsByClassName('hand-buttons');
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');


// enable computer decision
// print computer choice where compImage is

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
function getScore(userHand, computerHand) {
    let userScore;
    let computerScore;
        
    if (userHand === computerHand) {
        score = 0;
    } else if (userHand === 'rock' && computerHand === 'scissors' || computerHand === 'lizard') {
        userScore = 1
    } else if (userHand === 'paper' && computerHand === 'rock' || computerHand === 'spock') {
        userScore = 1
    } else if (userHand === 'scissors' && computerHand === 'paper' || computerHand === 'lizard') {
        userScore = 1
    } else if (userHand === 'lizard' && computerHand === 'paper' || computerHand === 'spock') {
        userScore = 1
    } else if (userHand === 'spock' && computerHand === 'rock' || computerHand === 'scissors') {
        userScore = 1
    } else {
        computerScore = 1
    };
}

// show result of computerHand() and userHand() in scoreboard
function showScore () {

}

