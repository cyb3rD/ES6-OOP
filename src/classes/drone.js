import {Vehicle} from './vehicle.js';

/**
 * Drone
 */
export class Drone extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong); // Requirement
    this.airTimeHours = null;
    this.base = null; 
  }
}
