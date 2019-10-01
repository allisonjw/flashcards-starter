const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1, card2, card3, deck

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
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have a deck of cards in an array', () => {
    expect(deck.cards).to.eql([card1, card2, card3]);
  });

  it('should be able to count how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3)
  })

});
