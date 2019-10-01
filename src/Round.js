const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns]
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())   
    this.turns++
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback()
    }
    //next card in cards array becomes current card
    //this.currentCard = this.deck.cards[0]++
    //this.turn.evaluatedGuess() if incorrect will be stored in this.incorrectGuesses.push(wrong guess by id)
    //this.turn.giveFeedback()
  }

  calculatePercentCorrect() {
    // calcs and returns the percent
    return Math.floor(100 * (this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length);
  }

  endRound() {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }
}


module.exports = Round;