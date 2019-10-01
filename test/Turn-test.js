const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card, turn

  beforeEach( () => {
    card = new Card({
      id: 1, 
      question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], 
      correctAnswer: 'object'});
    turn = new Turn('object', card)
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store user’s guess to the question', () => {
    expect(turn.guess).to.equal('object');
  }); 

  it('should store the card as an object', () => {
    expect(turn.card).to.eql(card);
  });

  it('should store a guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  }); 

  it('should return the card after a guess', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return if answer is true or false', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should give feedback to player to notify them if answer is `correct!` or `incorrect!`', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

});