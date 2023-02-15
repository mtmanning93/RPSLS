const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const hands = document.getElementsByClassName('hand-buttons');
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');

// On page load take user name input and alter username

function loadUsername() {
    
}

// enable computer decision
// print computer choice where compImage is

function computerHand() {

    const randomNum = Math.floor(Math.random() * choices.length);
    
    const compChoice = choices[randomNum];
    const compSelection = `url(/assets/images/${choices[randomNum]}.png)`;
    compImage.style.backgroundImage = compSelection;

    return compChoice;
}

// need event listener for the buttons
// make buttons listen for a click by user
// call both userHand and computerHand functions

for (let hand of hands) {
    hand.addEventListener('click', function () {

        const userChoice = this.getAttribute("value");

        playGame(userHand(userChoice), computerHand());
    });
};

// change user image to hand image

function userHand(userChoice) {
    userImage.style.backgroundImage = `url(/assets/images/${userChoice}.png)`;
    return userChoice;
}

// get the result of (computerHand, userChoice)

const scoreBoard = document.querySelector('#scoreboard');
let userScore = 0;
let computerScore = 0;

function playGame(userChoice, compChoice) {

    console.log(userChoice, compChoice)

    if (userChoice === compChoice) {
        userScore;
        computerScore;
    } else if ((userChoice === 'rock' && (compChoice === 'scissors' || compChoice === 'lizard')) 
        || (userChoice === 'paper' && (compChoice === 'rock' || compChoice === 'spock')) 
        || (userChoice === 'scissors' && (compChoice === 'paper' || compChoice === 'lizard')) 
        || (userChoice === 'lizard' && (compChoice === 'paper' || compChoice === 'spock')) 
        || (userChoice === 'spock' && (compChoice === 'rock' || compChoice === 'scissors'))) {
        userScore ++;
    } else {
        computerScore ++;
    };
   
    scoreBoard.innerHTML = userScore + ' : ' + computerScore;

    return (userScore, computerScore);
};

// Restart Game Button Function

function restartGame() {
    window.location.reload();
};

