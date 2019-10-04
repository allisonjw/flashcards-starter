const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard;
    this.startWatch = Date.now();
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

  stopWatch() {
    let endWatch = Date.now();
    let playTime = endWatch - this.startWatch;
    var minutes = Math.floor(playTime / 60000);
    var seconds = ((playTime % 60000) / 1000).toFixed(2);
    return `${minutes} minutes and ${seconds} seconds.`;
  }

  endRound() {
    this.turns = 0;
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Time to complete ${this.stopWatch()}`;
  }
}

module.exports = Round;