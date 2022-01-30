const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function() {
    return ("Please enter a guess between " + this.smallestNum + " and " + this.biggestNum)},
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    console.log(getGuess()); 
  }
 
}


  

console.log(game)



