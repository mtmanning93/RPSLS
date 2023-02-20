const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const hands = document.getElementsByClassName('hand-buttons');
let userImage = document.getElementsByClassName('human-hand')[1];
let compImage = document.getElementById('comp-hand');
let userChoice;

/**
 * On enterGame function take input type username value and add it to the username space on the gameboard.
 * Start the game with all game.html elements with a class of 'hidden'. 
 * After collecting the name input, add a class of 'hidden' to all of the index.html elements.
 * Remove the 'hidden' class from game.html elements. 
 */

function enterGame() {
    username = document.getElementById('username-input').value;
    document.getElementById("username-game").innerHTML = username;

    document.getElementById('opening-page').classList.add('hidden');
    document.getElementById('game-page').classList.remove('hidden');
};

// Enable computer decision
// Show computer choice where compImage is

function computerHand() {

    const randomNum = Math.floor(Math.random() * choices.length);
    
    const compChoice = choices[randomNum];
    const compSelection = `url(./assets/images/${choices[randomNum]}.png)`;
    
    compImage.style.backgroundRepeat = 'no-repeat';
    compImage.style.backgroundImage = compSelection;

    return compChoice;
};

/** 
* Loop through the hand-button class
* Listen to click event on hand choice button
* Take the value attribute of the clicked button
* Call both playGame() and bestOf() functions
*/

for (let hand of hands) {
    hand.addEventListener('click', function () {

        userChoice = this.getAttribute("value");

        playGame(userHand(userChoice), computerHand());
        
    });
};

// Change the image of the user to the userChoice image

function userHand(userChoice) {

    userImage.style.backgroundImage = `url(./assets/images/${userChoice}.png)`;
    userImage.style.backgroundRepeat = 'no-repeat';
   
    console.log(userChoice);
    console.log(userImage.style.backgroundImage);

    return userChoice;
};

// Get a result and return the score of both choices

const userScoreboard = document.querySelector('#user-scoreboard');
const compScoreboard = document.querySelector('#comp-scoreboard');
let userScore = 0;
let computerScore = 0;

function playGame(userChoice, compChoice) {

    console.log(userChoice, compChoice)

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

        bestOf(userScore, computerScore);

    }
   

    return (userScore, computerScore);
};

// Best Of if else Function

function bestOf(userScore, computerScore) {

    let games = userScore + computerScore;

    if (games === 3) {
        alert(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '! That was best of 3. How about best of 5?');
    } else if (games === 5) {
        alert(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '! That was best of 5. How about best of 7?');
    } else if (games === 7) {
        alert(`${username}` + ' ' + userScore + ' : Computer ' + computerScore + '! That was best of 7. Shall we contiue Playing?');
    };
    
    console.log(games);
    return games;
};


// Restart Game Button Function

function restartGame() {
    window.location.reload();
};