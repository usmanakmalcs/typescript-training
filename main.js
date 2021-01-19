var a; // Store only number
var b; // Store only string
var c; // Store only boolean
var d; // Store any type of value
var e = [1, 2, 3]; // Default initialization in array of type number
var f = ["1", "2", "3"]; // Default initialization in array of type string
var g = [true, false, true]; // Default initialization in array of type boolean
var h = [1, "2", true]; // Default initialization in array of type any
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
