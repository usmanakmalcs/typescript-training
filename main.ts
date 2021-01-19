let a:number;                           // Store only number
let b:string;                           // Store only string
let c:boolean;                          // Store only boolean
let d:any;                              // Store any type of value

let e:number[] = [1,2,3];               // Default initialization in array of type number
let f:string[] = ["1","2","3"];         // Default initialization in array of type string
let g:boolean[] = [true,false,true];    // Default initialization in array of type boolean
let h:any[] = [1,"2",true];             // Default initialization in array of type any

enum Color {Red = 0,Green = 1,Blue = 3}
let backgroundColor = Color.Blue;