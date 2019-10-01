const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    this.currentRound++
    let cards = prototypeQuestions.map(card => new Card(card))
    let deck = new Deck(cards)
    let currentRound = new Round(deck)
    this.printMessage(deck, currentRound);
    this.printQuestion(currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;