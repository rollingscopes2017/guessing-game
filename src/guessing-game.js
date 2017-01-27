class GuessingGame {
    constructor() {
        this._min = this._max = 0;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        return this.middle(this._min, this._max);
    }

    lower() {
        this._max = this.middle(this._min, this._max);
    }

    greater() {
        this._min = this.middle(this._min, this._max);
    }

    middle(min, max) {
        return Math.round((max - min) / 2) + min
    }
}

module.exports = GuessingGame;
