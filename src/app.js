class Drone {
    constructor(id) {
        this._id = id;
    }

    get id() {
        console.log('in getter');
        return this._id + ' TMP';
    }

    set id(value) {
        this._id = value;
    }
}

module.exports = Drone;

