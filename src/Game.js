const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


class Game {
  constructor() {
    this.currentRound
  }

  start() {
    //creates cards
    const cards = this.prototypeQuestions.map(card => new Card(cards))
    //puts cards in deck
    const deck = new Deck(cards)
    this.printMessage(deck, round);
    this.printQuestion(round)
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