# Rock.Paper.Scissors.Lizard.Spock

Rock.Paper.Scissors.Lizard.Spock (RPSLS for short) is a fun game played in order to make a decision on something. Usually it involves 2 players, however this online game is played against the computer which selects a choice at random. The original version of 'Rock Paper Scissors' is seen to have too fewer options often presenting a draw. In this game there are 2 extra options 'Lizard Spock' meaning a winner is more likely.

The site is targeted towards both adults and children looking to make a decsion such as "who drives to the restaurant". The game is more commonly known from the cult TV series 'The Big Bang Theory' therefore it is expected that the game would als attract a large number of these users.

![Image displaying sites responsiveness across different devices](./assets/images/screenshots/responsive-screens.png)

## Existing Features

- Logo/ Title

    * Visible at the top of the page the logo and title allow the user to clearly distinguish the name of the game, and in its simplicity some of the rules, as soon as the page loads.

![Image of the logo and title](./assets/images/screenshots/logo-title.png)

- Username/ Sign-Up Area

    * Before entering the game area there is a call to action, prompting the user to 'Enter Username' before clicking Play Game. By taking the username it creates a better experience during gameplay for the user.

    * Included in this area is a playable video where the rules are explained very effeciently by using one of the famous scenes from which the game is most well known.

![Enter username input](./assets/images/screenshots/enter-username.png)

![The username area including a text input and a submit button to play game](./assets/images/screenshots/username-screenshot.png)

- Rules

    * To compliment the video there is some written rules included at underneath to further clarify the game rules and winning hands.

![A written rules area to provide clarity to the winning hands](./assets/images/screenshots/rules.png)

- Choice of Hand Buttons

    * Featured thoughout the site the interactive buttons are hoverable giving a spin effect and shadow when the users cursor moves over them. When the user has clicked the 'Play Game' button and entered the game area the buttons then become clickable. When clicked the users choice is made and the game is played.

![Buttons providing the user with a choice of hand to play](./assets/images/screenshots/buttons.png)

- Game Area

    * The game area displays the choice of hand played by both the user and the computer, with the user on the left. On selection by the user the hands will be shown. A green border is applied to the relevant winner of the round, however when a draw occurs no border is applied to either.

    * Inside the game area the entered username is used to display which hand the user is by taking their input and displaying it above the played hand.

![Username input applied to game area](./assets/images/screenshots/username-applied.png)

![The game-area displaying the relevant hands and winner](./assets/images/screenshots/game-area.png)

- Scoreboard and Reset Button

    * The scoreboard displays the score incrementing by 1 each game to the winner. If a draw occurs no score is added to either player. The scoreboard also take the username input and displays it to provide a better experience to the user.

    * Included in the scoreboard is a 'Reset Game' button so the user can at will start again.

![Scoreboard displaying the scores](./assets/images/screenshots/scoreboard.png)

- Best Of

    * When playing the game a confirmation pop up is displayed when the combined scores reach 7, 15 or 30. Giving the results and the opportunity to continue playing or reset the game. This provides the user with a set number of possible games to make their decision.

![Confirmation alert when combined scores total 7, 15 or 30](./assets/images/screenshots/best-of.png)

## Features to Implement

-  Another feature to add in the future is another type of game when 2 different users could play. This could be achieved by bothe selecting a hand but not displaying either until the second user has chosen theirs. Creating a 'user vs user' game.

## Testing

### Lighthouse

A lighthouse analysis was conducted on the site. Giving the following results:

![Lighthouse analysis results](./assets/images/screenshots/lighthouse-scores.png)

Initially an issue arose due to low performance, however it became clear that this was due to an AdBlocker preventing certain element froms loading easily. When switching of the AdBlocker and testing also on different browser the score dramatically improved.

### Validator Testing

 - HTML
    - Here is a link to the results of the official W3C Validator which returned no errors. [Validated HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmtmanning93.github.io%2FRPSLS%2F)

- CSS
    - Here is a link to the results of the official Jigsaw Validator which returned no errors. [Validated CSS](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fmtmanning93.github.io%2FRPSLS%2F&usermedium=all&vextwarning=&warning=1)

- JavaScript
    - Here is a link to the results of the JSHint Validator which returned no errors. [JSHiint](https://jshint.com/)

The following Metrics were returned:
- There are 8 functions in this file.
- Function with the largest signature take 2 arguments, while the median is 0.
- Largest function has 14 statements in it, while the median is 4.5.
- The most complex function has a cyclomatic complexity value of 17 while the median is 1.

When running the Javascript through the JSHint validator one warning was returned:
> Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.

One 'unused variable' was also returned:
> enterGame
Although enterGame is in fact a function. Research showed that it is in fact possible to surpress this warning in the settings of JSHint or with some extra commented code specific to JSHint.


### Browser Testing

The site has been tested across 4 different browsers: 
- Edge
- Chrome
- Firefox
- Safari. 

A problem occured when in the final browser, Safari, the background images were not displaying, which wuld cause issues within the JavaScript logic also. To counter this issue the images used had to be converted from webp to jpg format. Once this change was applied the backgrounds were visible across all browsers, and no further issues were detected.

### Screen Testing

The site was also tested across different screen sizes, in both portrait and landscape when possible. 
These screens include:
- Laptop
- Phone
    - iPhone X
    - Samsung Xcover 5
- Tablet
    - iPad
- Desktop Monitor



