import {Player} from './player';

/** Types of variables in Type Script */
let a:number;                           // Store only number
let b:string;                           // Store only string
let c:boolean;                          // Store only boolean
let d:any;                              // Store any type of value

let e:number[] = [1,2,3];               // Default initialization in array of type number
let f:string[] = ["1","2","3"];         // Default initialization in array of type string
let g:boolean[] = [true,false,true];    // Default initialization in array of type boolean
let h:any[] = [1,"2",true];             // Default initialization in array of type any
let obj:{x:1,y:2};                      // Default initialization of object.


enum Color {Red = 0,Green = 1,Blue = 3}
let backgroundColor = Color.Blue;

/***** Type Assertion *******/
let word = 'hello world';
let endsWith = word.endsWith('d');

/**  You need to assert specific type 
 *   with variable having type "any" 
 *   in order to showintellisense of it's methods.
*/

let firstName;
firstName = 'usman';

let startsWith = (<string>firstName).startsWith('u');
let nameEnd = (firstName as string).endsWith('n');

// Interacting with Classes and methods
let player = new Player(20);
player.score = 10;
console.log(player.score);
