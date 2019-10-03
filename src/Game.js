const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  
  printMessage(deck, round) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }
  
  printQuestion(round) {
    util.main(round);
  }
  
  start() {
    this.currentRound++
    let cards = prototypeQuestions.map(card => new Card(card));
    let deck = new Deck(cards)
    let round = new Round(deck)
    this.printMessage(deck, round);
    this.printQuestion(round)
  }
}

module.exports = Game;