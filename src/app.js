class Drone {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
    
if (typeof module !== "undefined" && module.exports) {
    module.exports = Drone;
} else {
//   
}

