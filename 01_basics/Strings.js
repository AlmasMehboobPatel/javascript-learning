const name = "Almas Patel"
const repoCount = "27"

// console.log(`This is my name ${name} and my repocount is ${repoCount}`);

const gameName = new String('almas.com')
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"))

const newString = gameName.substring(0,3)
console.log(newString);

const url = "almaspatel.com%20almaspathan"
console.log(url.replace("%20","-"))

console.log(url.includes('almas'))


console.log(gameName.split('.'))