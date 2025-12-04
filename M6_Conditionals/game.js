let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = parseInt(prompt("Pick a number between 1-10 (or type 999 to exit):"));

// Create while loop that continues for as long as the user guesses are incorrect. 
// Loop should exit if user enters 999 and not display "Too high!" 
while (userGuess !== randomNumber) { 
   if (userGuess === 999) { 
    alert("You've exited the game. Thanks for playing!"); 
break; 
    }


// If anything else is entered, the user should be prompted that their input is invalid and to guess again.
if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) { 
userGuess = parseInt(prompt("Invalid input. Pick a number between 1 and 10:")); 
continue; 
} 


// Loop should count the number of guesses. 
    attempts++; 


// If the guess is too low, the user should be promped "Too low!" and be able to guess again. 
if (userGuess < randomNumber) { 
       userGuess = parseInt(prompt("Too low! Try again:")); 
} 

// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.      	else if (userGuess > randomNumber) { 
         userGuess = parseInt(prompt("Too high! Try again:"));
       } 

// If the guess is correct, the user should be alerted of their win and be told the number of guesses they made. 
if (userGuess === randomNumber) { 
   attempts++; 
   alert(`Congratulations, you've guessed it in ${attempts} tries!`); 
}
