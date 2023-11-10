// Initialize player Names
let player1 = "Player1";
let player2 = "Player2";

// Function to edit player names 

function editNames() {

//Prompt user to change player names 

    player1 = prompt("Change Player1 Name")
    player2 = prompt("Change Player2 Name")

// Check if valid name is entered

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name');
        return;
    }
//Update player names in HTML 

    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}

//Function to roll the dice 

function rollTheDice() {
    let diceNum1 = document.querySelector( ".img1");
    let diceNum2 = document.querySelector( ".img2");

//Dice images to rolling amination

    diceNum1.setAttribute("src", "diceroll.gif")
    diceNum2.setAttribute("src", "diceroll.gif")

//Clear result text

    let result = document.querySelector('h1')
    result.innerHTML = ""

//Wait for animation to finish before displaying results
    setTimeout(() => {

//Generate random numbers for each die 

        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Set dice images to display the generated numbers

        diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

//determine the winner and display the results 

        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!"
        }
        else if (randomNumber1 < randomNumber2) {
            result.innerHTML = (player2 + " WINS!");
        }
        else {
            result.innerHTML = (player1 + " WINS!");
        }

    }, 1000);
}