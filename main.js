"use strict";
exports.__esModule = true;
var player_1 = require("./player");
/** Types of variables in Type Script */
var a; // Store only number
var b; // Store only string
var c; // Store only boolean
var d; // Store any type of value
var e = [1, 2, 3]; // Default initialization in array of type number
var f = ["1", "2", "3"]; // Default initialization in array of type string
var g = [true, false, true]; // Default initialization in array of type boolean
var h = [1, "2", true]; // Default initialization in array of type any
var obj; // Default initialization of object.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
/***** Type Assertion *******/
var word = 'hello world';
var endsWith = word.endsWith('d');
/**  You need to assert specific type
 *   with variable having type "any"
 *   in order to showintellisense of it's methods.
*/
var firstName;
firstName = 'usman';
var startsWith = firstName.startsWith('u');
var nameEnd = firstName.endsWith('n');
// Interacting with Classes and methods
var player = new player_1.Player(20);
player.score = 10;
console.log(player.score);
