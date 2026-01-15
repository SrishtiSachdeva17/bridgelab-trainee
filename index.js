const { use } = require("react");

console.log("node.js Backend Started");// outputs messages or variables to the console
/*console.error("error message");// outputs error messages to the console
console.warn("warning message");// outputs warning messages to the console
console.time("time1");
console.table("table1"); //displays the data in table form*/

/*there are 3 types of variables
1. var (global scope)
2. let (block scope)
3. const (block scope & constant value)*/
*/

//2Variables
let name = "Srishti";//string
let age = 21;//number
const country = "India";//string
let isStudent = true;//boolean

console.log("name");// to print the variable value
console.log("age");
console.log("country");
console.log("isStudent");

//data types Examp1
let score;  //undefined
let data = null; //null

console.log("score");
console.log("data");

//Object
let user ={  //key-value pairs
    name: "Srishti",
    age: 21,
    email: "srishti@gmail.com"
};

console.log("user");
console.log("user.name");

//Array ....list of multiple values in a single variable known as elements
let numbers = [1, 2, 3, 4, 5];//array of numbers
let users = ["Srishti", "Ankita", "Rohan"];//array of strings


//Operators....
let a = 10; 
let b = 5;

console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);

//condition if-else
let loginAge = 18;

if (loginAge >= 18) {// comparison operator
    console.log("Allowed to login");// checks if the login age is 18 or above
} else {
    console.log("Not allowed");
}

// loop (for)
for (let i = 1; i <= 5; i++) {
    console.log("Loop count:", i);
}

//function
function add(x, y) { // function can also be declared using new keyword but not suggested
    return x + y;
}

let result = add(20, 30);
console.log("Function result:", result);

//simple backend login
const admin = {
    username: "admin",
    password: "1234"
};

function login(user, pass) {
    if (user === admin.username && pass === admin.password) {
        console.log("Login successful");
    } else {
        console.log("Invalid Username or Password");
    }
}

login("admin", "1234");