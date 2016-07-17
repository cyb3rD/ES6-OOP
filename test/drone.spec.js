let chai = require('chai'),
    path = require('path');

chai.should();

let Drone = require('../src/app.js');

describe('Drone calss', () => {
  
  beforeEach(() => {
    drone = new Drone('TestDrone#123');
  });
  
  describe('#Drone()', () => {
    
    it('is Object', () => {
      drone.should.be.an('object');
    });
    
    it('has getter', () => {
      drone.id.should.equal('TestDrone#123');
    });

    it('has setter', () => {
      drone.id = 'Drone#1';    
      drone.id.should.equal('Drone#1');
    });

  });

});