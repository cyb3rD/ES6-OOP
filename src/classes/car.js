import {Vehicle} from './vehicle.js';

/**
 * Car
 */
export class Car extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong); // Requirement for call base class constructor
    this.miles = null;
    this.make = null;
  }
}
