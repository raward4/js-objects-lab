const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    if (!this.secretNum) {
      this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum}
    let guessValue = NaN
    do {
      guessValue = NaN
      while (isNaN(guessValue) || guessValue < this.smallestNum || guessValue > this.biggestNum) {
        guessValue = this.getGuess()
      }
    
        this.prevGuesses.push(guessValue)
        this.render(guessValue,this.secretNum,this.prevGuesses)
        
      } while (guessValue !== this.secretNum)
      return},

  getGuess: function (){
    let guessValue=parseInt(prompt(`Welcome! To play, guess a number between ${this.smallestNum} and ${this.biggestNum}.`)) 
    console.log('guess',guessValue)
    return guessValue
  },
  
  render: function(guessValue,secretNum,prevGuesses) {
    if (guessValue === secretNum) {
      let message = `Congrats You guessed the number in ${prevGuesses.length} guesses! Play again?`
      alert(message)
      return
    }
    let high = 'high'
    let low = 'low'
    let message = `Wrong! Your guess was too ${guessValue>secretNum? high:low}.  Previous guesses: ${prevGuesses.join(', ')}`
    alert(message)
},

}


game.play()

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
       // - The list of previous guesses can be generated using the aray `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.
