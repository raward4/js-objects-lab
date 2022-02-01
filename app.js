const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: this.secretNum = Math.floor(Math.random() * 
  (this.biggestNum - this.smallestNum + 1)) + this.smallestNum,
  prevGuesses: [],
  getGuess: function() { 
     guessValue = parseInt(
       alert("Please enter a guess between " + this.smallestNum -1 + " and " + this.biggestNum + 1)
      },
  render: getGuess(guessValue) {
    if (this.guessValue > this.secretNum) {
        return "Your guess is too HIGH!" + console.log(forEach(prevGuesses.length))
      }
    else if (this.guessValue < this.secretNum) {
      return "Your guess is too LOW!" + console.log(forEach(prevGuesses.length))
    }
    else if (this.guessValue === this.secretNum) {
      return "Congrats! You guessed the number in " + console.log(forEach(prevGuesses.length)) + " guesses!"
    }
    else {
      console.log("Invalid guess. To play, please choose a number from 1 - 100.")
    }
  },

  play: function(guessValue) {
      this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    console.log(guessValue); 
    console.log(this.secretNum)
  } ,
  countGuesses: function(...arr) {
    arr.forEach(guessValue);
    console.log(guessValue.join())
    }
}



  

console.log(game.play(74));

console.log(game.countGuesses);

//* 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
// Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum].*
//Hint - use a template literal for the prompt message.
//  Ensure that the `getGuess` method returns a value that:
  //  - Is a *number*, not a *string*.
  //  - Is between `smallestNum` and `biggestNum`, inclusive.
   // - Hints:
       // - This is a great use case for a `while` loop.
       // - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
    //- Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
    //- If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
    //- Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
   // - Hints:
      //  - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
       // - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
       // - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.
