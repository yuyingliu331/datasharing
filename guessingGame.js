/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	winningNumber = Math.floor(Math.random()*100);
	return winningNumber ;
}

// Fetch the Players Guess
function fetchNumber(){
$(document).ready(function(){
    	$("#submit-button").click(function(){
    		
    	   playersGuess = $("#userNumber").val();
       	   if(winningNumber != playersGuess){
    	     $("#resultStatus").text("cold").show();

    	   }
    	});    	
    })
}
function playersGuessSubmission(playersGuess){
	// add code here
		
};



// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	if(playersGuess != winningNumber){
		
	}
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

