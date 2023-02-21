const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const hands = document.getElementsByClassName('hand-buttons');
const userScoreboard = document.querySelector('#user-scoreboard');
const compScoreboard = document.querySelector('#comp-scoreboard');
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');
let userChoice;
let userScore = 0;
let computerScore = 0;

/**
 * On enterGame function take input type username value and add it to the username space on the gameboard.
 * Start the game with all game.html elements with a class of 'hidden'. 
 * After collecting the name input, add a class of 'hidden' to all of the index.html elements.
 * Remove the 'hidden' class from game.html elements. 
 */
function enterGame() {
    username = document.getElementById('username').value;
    document.getElementById("username-game").innerHTML = username;

    document.getElementById('opening-section').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');

    /** 
     * Loop through the hand-button class.
     * Listen to click event on hand choice button.
     * Take the value attribute of the clicked button.
     * Call both compareChoice() and bestOf() functions.
     */
    for (let hand of hands) {
        hand.addEventListener('click', function () {
    
            userChoice = this.getAttribute("value");
    
            compareChoice(userHand(userChoice), getComputerChoice());
            
        });
    };
};

/**
 * Enable computer decision.
 * Change computer image to chosen hand image.
 */
function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * choices.length);
    
    const compChoice = choices[randomNum];
    const compSelection = `url(./assets/images/${choices[randomNum]}.png)`;
    
    compImage.style.backgroundRepeat = 'no-repeat';
    compImage.style.backgroundImage = compSelection;

    return compChoice;
};

/**
 * Change userImage to the userChoice image.
 */
function userHand(userChoice) {

    userImage.style.backgroundImage = `url(./assets/images/${userChoice}.png)`;
    userImage.style.backgroundRepeat = 'no-repeat';

    return userChoice;
};

/**
 * Get a result and return the score by comparing both choices.
 * Increment score if a win from either side occurs.
 */
function compareChoice(userChoice, compChoice) {

    if (userChoice === compChoice) {
        userScore;
        computerScore;
        compImage.style.borderColor = 'black';
        userImage.style.borderColor = 'black';
    } else {
        if ((userChoice === 'rock' && (compChoice === 'scissors' || compChoice === 'lizard')) 
            || (userChoice === 'paper' && (compChoice === 'rock' || compChoice === 'spock')) 
            || (userChoice === 'scissors' && (compChoice === 'paper' || compChoice === 'lizard')) 
            || (userChoice === 'lizard' && (compChoice === 'paper' || compChoice === 'spock')) 
            || (userChoice === 'spock' && (compChoice === 'rock' || compChoice === 'scissors'))) {
                userScore ++;
                compImage.style.borderColor = 'black';
                userImage.style.borderColor = 'rgba(72, 255, 0, 0.83)';
        } else {
            computerScore ++;
            compImage.style.borderColor = 'rgba(72, 255, 0, 0.83)';
            userImage.style.borderColor = 'black';
        }

        userScoreboard.innerHTML = `${username}` + ' ' + userScore + ' ';
        compScoreboard.innerHTML = ' ' + computerScore + ' Computer';

        /**
         * Set delay for prompt to show after score incrementation.
         */
        setTimeout(() => {
            bestOf(userScore, computerScore);
          }, 500);
    };

    return (userScore, computerScore);
};

/**
 * Show an alert when total number of games equals 7, 15 and 23.
 * Show user score vs. comuter score.
 */
function bestOf(userScore, computerScore) {

    let games = userScore + computerScore;

    if (games === 7) {
        confirm(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '!\nThat was best of 7. How about best of 15?');
    } else if (games === 15) {
        confirm(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '!\nThat was best of 15. How about best of 23?');
    } else if (games === 23) {
        confirm(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '!\nThat was best of 23. Shall we contiue Playing?');
    };

    return games;
};

/**
 * Restart game button function.
 */
function restartGame() {
    window.location.reload();
};