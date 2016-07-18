/**
 * Test module
 */

// Module
import {Drone} from '../src/classes/drone.js';

let chai = require('chai');

chai.should();

// Suite
describe('Drone class', () => {
  let drone;
  
  beforeEach(() => {
    drone = new Drone('TestDrone#123');
  });
  
  // test
  describe('#Drone()', () => {
    
    it('After calling constructor drone is an Object', () => {
      
      drone.should.be.an('object');
    });
    
    // it('has getter', () => {
    //   drone.id.should.equal('TestDrone#123');
    // });

    // it('has setter', () => {
    //   drone.id = 'Drone#1';    
    //   drone.id.should.equal('Drone#1');
    // });

  });

});