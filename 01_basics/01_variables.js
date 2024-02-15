const accountId = "123455"
let accountEmail = "almas@google.com"
var accountPassword = "123456"
accountCity = "mumbai"
let accountState

// accountId = "0000012" //not allowed

/*
Prefer not to use var
Because of issue in block scope and functionalscope
*/


accountEmail = "hc@gmail.com"
accountPassword = "030303"
accountCity = "Aurangabad"

console.table([accountEmail, accountPassword, accountCity, accountState])