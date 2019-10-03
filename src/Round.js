const Turn = require('../src/Turn');
const Game = require('../src/Game');


class Round {
  constructor(deck, game) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard;
    this.game = game;
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
    // console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    if (this.calculatePercentCorrect() > 85) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`); 
    } else {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Play again to get over 90 percent`);
      this.game.start()
    }
  }
}

//stopwatch()
//use setTimeout() and setInterval()
//let timerId = setTimeout(endRound, 100)
//console.log(`It took you ${timer} to finish`)
  

//nextDataset()
//conditional if prototypeQuestions is empty 
//OR envoke this method in endRound



module.exports = Round;