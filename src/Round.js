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
  }

  calculatePercentCorrect() {
    return Math.floor(100 * (this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length);
  }

  endRound() {
    this.turns = 0;
    // eslint-disable-next-line no-console
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}


module.exports = Round;