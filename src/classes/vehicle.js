// Vehicle base class
export class Vehicle {
    constructor(id) {
      console.log('Vehicle constructor');
      this._id = id;
    }

    get id() {
      return this._id;
    }

    set id(value) {
      this._id = value;
    }
}
