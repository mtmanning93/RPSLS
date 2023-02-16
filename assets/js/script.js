const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const hands = document.getElementsByClassName('hand-buttons');
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');

/**
 * 
 * Then you start the game with all the game.html stuff with a class of hidden. 
 * Then in the javascript after collecting the name input you add a class of hidden to all of the index.html elements. 
 * Thus effectively giving you a page change without actually changing page :)
 */

function enterGame() {
    username = document.getElementById('username-input').value;
    document.getElementById("username-game").innerHTML = username;

    document.getElementById('opening-page').classList.add('hidden');
    document.getElementById('game-page').classList.remove('hidden');
};

// enable computer decision
// print computer choice where compImage is

function computerHand() {

    const randomNum = Math.floor(Math.random() * choices.length);
    
    const compChoice = choices[randomNum];
    const compSelection = `url(/assets/images/${choices[randomNum]}.png)`;
    
    compImage.style.backgroundRepeat = 'no-repeat';
    compImage.style.backgroundImage = compSelection;

    return compChoice;
};

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

// get the result of (compChoice, userChoice)

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
   
    scoreBoard.innerHTML = `${username}` + ' ' + userScore + ' : ' + computerScore + ' Computer';

    return (userScore, computerScore);
};

// Restart Game Button Function

function restartGame() {
    window.location.reload();
};

