const expect = require('chai').expect;
// const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Deck', () => {

  let card1, card2, card3, deck, round

  beforeEach( () => {
    card1 = ({
      id: 1, 
      question: 'What allows you to define a set of related information using key-value pairs?', 
      answers: ['object', 'array', 'function'], 
      correctAnswer: 'object'});
    card2 = new Card({
      id: 14, 
      question: 'What organ is Khalid missing?', 
      answers: ['spleen', 'appendix', 'gallbladder'], 
      correctAnswer: 'gallbladder'});
    card3 = new Card({
      id: 12, 
      question: 'What is Travis\'s middle name?', 
      answers: ['Lex', 'William', 'Fitzgerald'], 
      correctAnswer: 'Fitzgerald'});
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck of cards for each round', () => {
    expect(round.deck).to.eql(deck);
  });

  it('should store all incorrect guesses in an array', () => {
    expect(round.incorrectGuesses).to.eql([]);
  });

  it('should start with no turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should now what the current cards is', () => {
    expect(round.returnCurrentCard()).to.eql(deck.cards[0]);
  });

  it('should count turns, change card after every turn and store incorrect answers in an array', () => {
    expect(round.takeTurn()).to.eql('incorrect!')
  })

  it('should calculate percentage of correct answers', () => {
    round.takeTurn('object');
    round.takeTurn('appendix');
    round.takeTurn('William');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should end the round', () => {
    round.endRound()
  });

});    