"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(_score) {
        var _this = this;
        this.calculateScore = function (otherPlayer) {
            return _this.score - otherPlayer.score;
        };
        this._score = _score;
    }
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
