// primitive 

// 7 types : String , Number , Boolean , Null , Undefined , Symbol, BigInt



// Non Premitive

const score = 100
const scoreValue = 100.00

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 3457895463125789n

// Reference (Non Premitive)

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "Dora"];
let myObj = {
    name : "almas",
    age : 27
}


const myFunction = function(){
    console.log("Hello World")
};

// console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++


let myComapanyName = "webperfectodotcom"
let anotherCompany = myComapanyName
anotherCompany = "Googledotcom"

//console.log(anotherCompany)
// console.log(myComapanyName)

let userOne = {
    email: "google.com",
    upi : "upi.rbl"
}
let userTwo = userOne
userTwo.email = "almaspatel347@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
