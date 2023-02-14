const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userImage = document.getElementById('human-hand');
let compImage = document.getElementById('comp-hand');
const hands = document.getElementsByClassName('hand-buttons');

// enable computer decision
function computerHand() {
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}


// need event listener for the buttons
// make buttons listen for a click by user
for (let hand of hands) {
    hand.addEventListener('click', function () {
        let userChoice = this.getAttribute("value");
        userHand(userChoice);
        console.log(userChoice);
    });
};

// change user image to hand choice image
function userHand(userChoice) {
    userImage.style.backgroundImage = `url(/assets/images/${userChoice}.png)`;
}

// calculate the winner
function onClick() {

}

// get the result of (computerHand, userHand)
function getScore() {

}

// show result of computerHand() and userHand() in scoreboard
function showScore () {

}

