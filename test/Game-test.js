import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game';


describe('Game', () => {

  let game;
  
  beforeEach(() => {
    game = new Game();
  });
  
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });
  
  it('should start a game', () => {
    game.start();
  });
  
  
});